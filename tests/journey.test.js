import test from 'node:test';
import assert from 'node:assert/strict';
import {steps, tasks, normalizeProgress, canVisit} from '../src/journey.js';

test('each room has a task and the journey opens in order',()=>{
  assert.equal(steps.length,15);
  assert.equal(new Set(steps).size,steps.length);
  for(const [i,step] of steps.entries()){
    assert.ok(tasks[step]?.[0]);
    assert.ok(canVisit(step,i));
    if(i>0)assert.equal(canVisit(step,i-1),false);
  }
  assert.equal(canVisit('read',0),false);
  assert.equal(canVisit('read',1),true);
  assert.equal(canVisit('game',4),false);
  assert.equal(canVisit('game',5),true);
  assert.equal(canVisit('storyland',7),false);
  assert.equal(canVisit('chapters',14),false);
  assert.equal(canVisit('chapters',15),true);
});

test('invalid or completed progress cannot create a ready step',()=>{
  assert.deepEqual(normalizeProgress(null),{completed:0,ready:false});
  assert.deepEqual(normalizeProgress({completed:99,ready:true}),{completed:15,ready:false});
  assert.deepEqual(normalizeProgress({completed:-4,ready:false}),{completed:0,ready:false});
  assert.deepEqual(normalizeProgress({completed:2,ready:true}),{completed:2,ready:true});
});
