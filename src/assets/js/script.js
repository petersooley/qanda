var QUESTS_SELECTOR = 'form[data-quests]';
var QUESTS_SUBMIT = 'input[type="submit"]';
var QUESTS_COMPLETE = '[data-quests-complete]';

function each(items, cb) {
  return Array.prototype.forEach.call(items, cb);
};

function matches(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};

function hide(el) {
  el.style.display = 'none';
}

function show(el) {
  el.style.display = '';
}

function post(form) {
  var url = form.action;

  return reqwest({
    url: url,
    method: form.method,
    data: reqwest.serialize(form),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

function Quest(el) {
  this.el = el;
  this.next = null;

  var sibling = el.nextElementSibling;
  if (sibling && matches(sibling, QUESTS_SELECTOR)) {
    this.next = sibling;
  }

  this.el.querySelector(QUESTS_SUBMIT)
    .addEventListener('click', this.handleSubmit.bind(this));

};

Quest.prototype.handleSubmit = function handleSubmit(event) {
  event.preventDefault();

  post(this.el);

  hide(this.el);
  if (this.next) {
    show(this.next);
  } else {
    show(document.querySelector(QUESTS_COMPLETE));
  }
};



function start() {
  var els = document.querySelectorAll(QUESTS_SELECTOR);
  each(els, function(el, i) {
    new Quest(el);
  });
};

ready(start);