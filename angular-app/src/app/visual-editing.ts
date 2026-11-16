import { DOCUMENT, Location } from '@angular/common';
import {
  DestroyRef,
  EnvironmentProviders,
  inject,
  provideEnvironmentInitializer,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  enableVisualEditing,
  HistoryUpdate,
} from '@sanity/visual-editing-standalone';
import { filter } from 'rxjs';

import { SanityService } from './sanity.service';

/**
 * Enables Visual Editing overlays while the app runs in preview mode inside
 * the Presentation tool. Normal visitors never load the overlays.
 */
export function provideVisualEditing(): EnvironmentProviders {
  return provideEnvironmentInitializer(() => {
    const sanity = inject(SanityService);
    if (!sanity.previewMode) {
      return;
    }
    const router = inject(Router);
    const location = inject(Location);
    const document = inject(DOCUMENT);

    // Built from angular.json's non-injected `visual-editing` styles bundle.
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'visual-editing.css';
    document.head.appendChild(stylesheet);

    const disableVisualEditing = enableVisualEditing({
      history: {
        subscribe: (navigate) => {
          navigate({ type: 'push', url: router.url });
          const subscription = router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event) =>
              navigate({ type: 'push', url: event.urlAfterRedirects }),
            );
          return () => subscription.unsubscribe();
        },
        update: (update: HistoryUpdate) => {
          const url = new URL(update.url, document.baseURI);
          const path = url.pathname + url.search + url.hash;
          switch (update.type) {
            case 'push':
              router.navigateByUrl(path);
              break;
            case 'replace':
              router.navigateByUrl(path, { replaceUrl: true });
              break;
            case 'pop':
              location.back();
              break;
            default: {
              const unhandled: never = update.type;
              throw new Error(`Unhandled history update: ${unhandled}`);
            }
          }
        },
      },
      refresh: async () => sanity.refresh(),
      onPerspectiveChange: (perspective) => sanity.setPerspective(perspective),
    });

    inject(DestroyRef).onDestroy(() => {
      disableVisualEditing();
      stylesheet.remove();
    });
  });
}
