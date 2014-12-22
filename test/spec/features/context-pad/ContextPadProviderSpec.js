'use strict';

require('../../../TestHelper');

/* global bootstrapViewer, inject */


var Fixtures = require('../../../fixtures');

var contextPadModule = require('../../../../lib/features/context-pad'),
    bpmnModule = require('../../../../lib/core');


describe('features - context-pad', function() {

  var diagramXML = Fixtures.getDiagram('simple.bpmn');

  var testModules = [ contextPadModule, bpmnModule ];

  beforeEach(bootstrapViewer(diagramXML, { modules: testModules }));


  describe('bootstrap', function() {

    it('should bootstrap', inject(function(contextPadProvider) {
      expect(contextPadProvider).toBeDefined();
    }));

  });
});
