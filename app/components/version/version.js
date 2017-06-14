'use strict';

angular.module('markupChallenge.version', [
  'markupChallenge.version.interpolate-filter',
  'markupChallenge.version.version-directive'
])

.value('version', '0.1');
