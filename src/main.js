import environment from './environment';
import { PLATFORM } from 'aurelia-pal';
import 'babel-polyfill';

export async function configure(aurelia) {

  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  // Install and configure the plugin
  //aurelia.use(PLATFORM.moduleName('aurelia-toolbelt'));
  //.plugin(PLATFORM.moduleName('aurelia-toolbelt'));

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  await aurelia.start();
  aurelia.setRoot(PLATFORM.moduleName('app'));
}
