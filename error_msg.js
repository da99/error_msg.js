
const ERROR_TYPES = ["network_error", "try_again", "success", "server_error", "not_found"];

function create_msg_div(err_type, msg) {
  const div = document.createElement('div');
  div.classList.add('error_msg', err_type);
  div.appendChild(document.createTextNode(msg));
  return div;
}

function hide_errors(parent) {
  const children = parent.querySelectorAll("div.error_msg");
  for (let i = 0; i < children.length; i++) {
    const div = children[i];
    div.classList.add("hide");
  }
}

class Error_Msg {
  static show(selector, err_type, msg) {
    const target = document.querySelector(selector);
    if (!target)
      return false;

    hide_errors(target);

    const msg_div = target.querySelector("div." + err_type);
    if (!msg_div) {
      msg_div = create_msg_div(err_type, msg);
      target.appendChild(msg_div);
      return true;
    }

    if (msg_div.innerHTML !== msg) {
      msg_div.innerHTML = '';
      msg_div.appendChild(document.createTextNode(msg));
    }
    msg_div.classList.remove('hide');
    target.classList.remove('hide');
  } // static

  static hide_all(selector) {

  } // static

  static hide(selector, err_type) {

  }
}
