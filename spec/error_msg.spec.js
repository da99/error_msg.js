import { describe, expect, test, beforeEach } from 'vitest'
import { Error_Msg } from '../error_msg.mjs'


function the_msg() {
  return document.getElementById('the_error').innerText;
};

function the_html() {
  return document.getElementById('the_error').innerHTML;
}

function the_error(selector) {
  if (!selector)
    return document.getElementById('the_error');
  return the_error().querySelector(selector);
}

beforeEach(async () => {
  document.body.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('error_msg', 'hide');
  div.id = 'the_error'
  document.body.appendChild(div);
});

describe(".show", () => {

  test('displays the error message', () => {
    Error_Msg.show('#the_error', 'network_error', "Not connected.")
    expect(the_msg()).toBe("Not connected.")
  });

  test('removes .hide from the parent classList', () => {
    Error_Msg.show('#the_error', 'some_error', "Did not compute.")
    expect(the_error().classList.contains('hide')).toBe(false);
  });

  test('removes .hide from the error message classList', () => {
    Error_Msg.show('#the_error', 'some_error', "Did not compute.")
    the_error().querySelector("div.some_error").classList.add('hide');
    Error_Msg.show('#the_error', 'some_error', "Did not compute.")
    const fin = the_error().querySelector("div.some_error");
    expect(fin.classList.contains('hide')).toBe(false);
  });

}); // describe

describe(".hide_msgs", () => {
  test('adds .hide to all error message DIVs', () => {
    Error_Msg.show('#the_error', 'err1', "Not connected.")
    Error_Msg.show('#the_error', 'err2', "Not connected.")
    Error_Msg.show('#the_error', 'err3', "Not connected.")
    Error_Msg.hide_msgs("#the_error");
    expect(the_error('div.err1').classList.contains('hide')).toBe(true);
    expect(the_error('div.err2').classList.contains('hide')).toBe(true);
    expect(the_error('div.err3').classList.contains('hide')).toBe(true);
  });
});


describe(".hide", () => {
  test('adds .hide to parent container', () => {
    Error_Msg.show('#the_error', 'err1', "Not connected.")
    Error_Msg.show('#the_error', 'err2', "Not connected.")
    Error_Msg.show('#the_error', 'err3', "Not connected.")
    Error_Msg.hide("#the_error");
    expect(the_error().classList.contains('hide')).toBe(true);
  });

  test('adds .hide to all error message DIVs', () => {
    Error_Msg.show('#the_error', 'err1', "Not connected.")
    Error_Msg.show('#the_error', 'err2', "Not connected.")
    Error_Msg.show('#the_error', 'err3', "Not connected.")
    Error_Msg.hide("#the_error");
    expect(the_error('div.err1').classList.contains('hide')).toBe(true);
    expect(the_error('div.err2').classList.contains('hide')).toBe(true);
    expect(the_error('div.err3').classList.contains('hide')).toBe(true);
  });
});
