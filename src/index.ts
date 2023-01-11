import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the first_test_extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'first_test_extension:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension first_test_extension is activated!');
  }
};

export default plugin;
