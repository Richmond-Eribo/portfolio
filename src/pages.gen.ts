// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as PostsIndex_getConfig } from './pages/posts/index';
// prettier-ignore
import type { getConfig as PostsSlugIndex_getConfig } from './pages/posts/[slug]/index';
// prettier-ignore
import type { getConfig as ProjectsIndex_getConfig } from './pages/projects/index';
// prettier-ignore
import type { getConfig as WorkIndex_getConfig } from './pages/work/index';
// prettier-ignore
import type { getConfig as Root_getConfig } from './pages/_root';

// prettier-ignore
type Page =
| ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
| ({ path: '/posts' } & GetConfigResponse<typeof PostsIndex_getConfig>)
| ({ path: '/posts/[slug]' } & GetConfigResponse<typeof PostsSlugIndex_getConfig>)
| ({ path: '/projects' } & GetConfigResponse<typeof ProjectsIndex_getConfig>)
| ({ path: '/work' } & GetConfigResponse<typeof WorkIndex_getConfig>)
| ({ path: '/_root' } & GetConfigResponse<typeof Root_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
  