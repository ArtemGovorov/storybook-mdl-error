/**
 * Created by josh.welham on 16/08/16.
 */

function noop() {
  return null;
}

require.extensions['.styl'] = noop;
// you can add whatever you wanna handle
require.extensions['.scss'] = noop;
require.extensions['.png'] = noop;
require.extensions['.css'] = noop;
