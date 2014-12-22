var fs = require('fs');

var DIAGRAMS = {};

DIAGRAMS['draw/activity-markers-combination.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/activity-markers-combination.bpmn', 'utf8');
DIAGRAMS['draw/activity-markers.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/activity-markers.bpmn', 'utf8');
DIAGRAMS['draw/boundary-event-with-refnode.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/boundary-event-with-refnode.bpmn', 'utf8');
DIAGRAMS['draw/boundary-event-without-refnode.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/boundary-event-without-refnode.bpmn', 'utf8');
DIAGRAMS['draw/boundary-event-z-index.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/boundary-event-z-index.bpmn', 'utf8');
DIAGRAMS['draw/conditional-flow-default.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/conditional-flow-default.bpmn', 'utf8');
DIAGRAMS['draw/conditional-flow-gateways.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/conditional-flow-gateways.bpmn', 'utf8');
DIAGRAMS['draw/conditional-flow-typed-task.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/conditional-flow-typed-task.bpmn', 'utf8');
DIAGRAMS['draw/conditional-flow.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/conditional-flow.bpmn', 'utf8');
DIAGRAMS['draw/data-objects.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/data-objects.bpmn', 'utf8');
DIAGRAMS['draw/event-subprocesses-collapsed.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/event-subprocesses-collapsed.bpmn', 'utf8');
DIAGRAMS['draw/event-subprocesses-expanded.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/event-subprocesses-expanded.bpmn', 'utf8');
DIAGRAMS['draw/events-interrupting.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/events-interrupting.bpmn', 'utf8');
DIAGRAMS['draw/events.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/events.bpmn', 'utf8');
DIAGRAMS['draw/gateway-type-default.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/gateway-type-default.bpmn', 'utf8');
DIAGRAMS['draw/gateways.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/gateways.bpmn', 'utf8');
DIAGRAMS['draw/group.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/group.bpmn', 'utf8');
DIAGRAMS['draw/message-marker.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/message-marker.bpmn', 'utf8');
DIAGRAMS['draw/pools-with-collection-marker.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/pools-with-collection-marker.bpmn', 'utf8');
DIAGRAMS['draw/pools.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/pools.bpmn', 'utf8');
DIAGRAMS['draw/task-types.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/task-types.bpmn', 'utf8');
DIAGRAMS['draw/text-annotation.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/text-annotation.bpmn', 'utf8');
DIAGRAMS['draw/xor.bpmn'] = fs.readFileSync(__dirname + '/bpmn/draw/xor.bpmn', 'utf8')

DIAGRAMS['error/di-plane-no-bpmn-element.bpmn'] = fs.readFileSync(__dirname + '/bpmn/error/di-plane-no-bpmn-element.bpmn', 'utf8');
DIAGRAMS['error/invalid-child.bpmn'] = fs.readFileSync(__dirname + '/bpmn/error/invalid-child.bpmn', 'utf8');
DIAGRAMS['error/invalid-flow-element.bpmn'] = fs.readFileSync(__dirname + '/bpmn/error/invalid-flow-element.bpmn', 'utf8');
DIAGRAMS['error/missing-namespace.bpmn'] = fs.readFileSync(__dirname + '/bpmn/error/missing-namespace.bpmn', 'utf8');
DIAGRAMS['error/multiple-dis.bpmn'] = fs.readFileSync(__dirname + '/bpmn/error/multiple-dis.bpmn', 'utf8');
DIAGRAMS['error/no-xml.txt'] = fs.readFileSync(__dirname + '/bpmn/error/no-xml.txt', 'utf8');

DIAGRAMS['features/drop/drop.bpmn'] = fs.readFileSync(__dirname + '/bpmn/features/drop/drop.bpmn', 'utf8');
DIAGRAMS['features/drop/recursive-task.bpmn'] = fs.readFileSync(__dirname + '/bpmn/features/drop/recursive-task.bpmn', 'utf8');
DIAGRAMS['features/label-editing/labels.bpmn'] = fs.readFileSync(__dirname + '/bpmn/features/label-editing/labels.bpmn', 'utf8');

DIAGRAMS['import/association/compensation.bpmn'] = fs.readFileSync(__dirname + '/bpmn/import/association/compensation.bpmn', 'utf8');
DIAGRAMS['import/association/data-association.bpmn'] = fs.readFileSync(__dirname + '/bpmn/import/association/data-association.bpmn', 'utf8');
DIAGRAMS['import/association/data-input-output.bpmn'] = fs.readFileSync(__dirname + '/bpmn/import/association/data-input-output.bpmn', 'utf8');
DIAGRAMS['import/association/text-annotation.bpmn'] = fs.readFileSync(__dirname + '/bpmn/import/association/text-annotation.bpmn', 'utf8');
DIAGRAMS['import/labels/collaboration-message-flows.bpmn'] = fs.readFileSync(__dirname + '/bpmn/import/labels/collaboration-message-flows.bpmn', 'utf8');
DIAGRAMS['import/labels/collaboration.bpmn'] = fs.readFileSync(__dirname + '/bpmn/import/labels/collaboration.bpmn', 'utf8');
DIAGRAMS['import/labels/embedded.bpmn'] = fs.readFileSync(__dirname + '/bpmn/import/labels/embedded.bpmn', 'utf8');
DIAGRAMS['import/labels/external-no-di.bpmn'] = fs.readFileSync(__dirname + '/bpmn/import/labels/external-no-di.bpmn', 'utf8');
DIAGRAMS['import/labels/external.bpmn'] = fs.readFileSync(__dirname + '/bpmn/import/labels/external.bpmn', 'utf8');
DIAGRAMS['import/collapsed-collaboration.bpmn'] = fs.readFileSync(__dirname + '/bpmn/import/collapsed-collaboration.bpmn', 'utf8');
DIAGRAMS['import/collapsed.bpmn'] = fs.readFileSync(__dirname + '/bpmn/import/collapsed.bpmn', 'utf8');

DIAGRAMS['collaboration-data-items.bpmn'] = fs.readFileSync(__dirname + '/bpmn/collaboration-data-items.bpmn', 'utf8');
DIAGRAMS['collaboration-message-flows.bpmn'] = fs.readFileSync(__dirname + '/bpmn/collaboration-message-flows.bpmn', 'utf8');
DIAGRAMS['collaboration-sequence-flows.bpmn'] = fs.readFileSync(__dirname + '/bpmn/collaboration-sequence-flows.bpmn', 'utf8');
DIAGRAMS['collaboration.bpmn'] = fs.readFileSync(__dirname + '/bpmn/collaboration.bpmn', 'utf8');
DIAGRAMS['containers.bpmn'] = fs.readFileSync(__dirname + '/bpmn/containers.bpmn', 'utf8');
DIAGRAMS['empty-definitions.bpmn'] = fs.readFileSync(__dirname + '/bpmn/empty-definitions.bpmn', 'utf8');
DIAGRAMS['flow-markers.bpmn'] = fs.readFileSync(__dirname + '/bpmn/flow-markers.bpmn', 'utf8');
DIAGRAMS['nested-subprocesses.bpmn'] = fs.readFileSync(__dirname + '/bpmn/nested-subprocesses.bpmn', 'utf8');
DIAGRAMS['sequence-flows.bpmn'] = fs.readFileSync(__dirname + '/bpmn/sequence-flows.bpmn', 'utf8');
DIAGRAMS['simple.bpmn'] = fs.readFileSync(__dirname + '/bpmn/simple.bpmn', 'utf8');

DIAGRAMS['complex.bpmn'] = fs.readFileSync(__dirname + '/bpmn/complex.bpmn', 'utf8');

var DIAGRAMS_USED_COUNT = {};

module.exports.getDiagram = function(id) {
  
  var diagram = DIAGRAMS[id];
  
  if (!diagram) {
    throw new Error('diagram <' + id + '> not registered. Add it to ' + __dirname + '/bpmn/index.js');
  }
  
  DIAGRAMS_USED_COUNT[id] = DIAGRAMS_USED_COUNT[id] || 0;
  DIAGRAMS_USED_COUNT[id]++;
  
  return diagram;
};