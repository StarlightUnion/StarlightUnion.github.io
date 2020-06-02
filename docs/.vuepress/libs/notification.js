import Tip from '../components/Tip.vue'
import Vue from 'vue'

Tip.newInstance = properties => {
  const props = properties || {};

  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Tip, {
        props: props
      });
    }
  });

  const component = Instance.$mount();
  document.body.appendChild(component.$el);

  const tip = Instance.$children[0];

  return {
    add (noticeProps) {
      tip.add(noticeProps);
    },
    remove (name) {
      tip.remove(name);
    }
  }
};

export default Tip;