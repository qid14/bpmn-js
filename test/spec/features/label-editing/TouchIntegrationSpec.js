'use strict';

var TestHelper = require('../../../TestHelper'),
    Fixtures = require('../../../fixtures');


var Modeler = require('../../../../lib/Modeler');


describe('direct editing - touch integration', function() {

  var container;


  beforeEach(function() {
    container = jasmine.getEnv().getTestContainer();
  });


  function createModeler(xml, done) {
    var modeler = new Modeler({ container: container });

    modeler.importXML(xml, function(err) {
      done(err, modeler);
    });
  }


  it('should work on modeler (manual test)', function(done) {
    var xml = Fixtures.getDiagram('simple.bpmn');
    createModeler(xml, done);
  });


  it('should edit labels via double tap (manual test)', function(done) {
    var xml = Fixtures.getDiagram('features/label-editing/labels.bpmn');
    createModeler(xml, done);
  });

});