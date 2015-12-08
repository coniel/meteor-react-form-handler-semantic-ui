Package.describe({
  name: 'coniel:react-form-handler-semantic-ui',
  version: '0.2.0',
  summary: "Semantic UI inputs for coniel:react-form-handler" ,
  git: 'https://github.com/coniel/meteor-react-form-handler-semantic-ui',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'react@0.14.1_1',
    'coniel:react-form-handler@0.2.1',
    'semantic:ui-reset@2.1.6',
    'semantic:ui-transition@2.1.6',
    'semantic:ui-button@2.1.5',
    'semantic:ui-form@2.1.6',
    'semantic:ui-label@2.1.6',
    'semantic:ui-input@2.1.6',
    'semantic:ui-dropdown@2.1.6',
    'semantic:ui-checkbox@2.1.5',
    'semantic:ui-icon@2.1.4',
    'sarasate:semantic-ui-datetimepicker@0.0.2'
  ]);2

  api.addFiles([
    'lib/components/TextInput.jsx',
    'lib/components/TextArea.jsx',
    //'lib/components/DatePicker.jsx',
    'lib/components/Select.jsx',
    'lib/components/Checkbox.jsx',
    'lib/components/RadioButtonGroup.jsx',
    'lib/components/RadioButton.jsx',
    // Submit buttons
    'lib/components/SubmitButton.jsx',
    'lib/components/FormActions.jsx'
  ]);

  api.addFiles([
      'client/style.css'
  ], 'client');

  // Exports
  api.export([
    'TextInput',
    'TextArea',
    'DatePicker',
    'Select',
    'Checkbox',
    'RadioButtonGroup',
    'RadioButton',
    'SubmitButton',
    'FormActions',
    'SubmitFAB'
  ]);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('coniel:react-form-handler-semantic-ui');
  api.addFiles('react-form-handler-semantic-ui-tests.js');
});
