import Ember from 'ember';

export function kCount(params/*, hash*/) {
  if(!params) {
    return '';
  }
  const [count] = params;
  if(parseInt(count,10) > 1000) {
    return `${  Math.round((count * 0.01) * 0.1).toFixed(0)}K`;
  } else {
    return `${count}`;
  }
}

export default Ember.Helper.helper(kCount);
