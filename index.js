const decrypted_text = document.querySelector(".decrypted_text");
const encrypted_text = document.querySelector(".encrypted_text");
let shift_amount = document.querySelector("input");
const button = document.querySelector("button");

//prettier-ignore
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', ';', ':', ',', '.', '/', '?', '<', '>', '|'];

button.addEventListener("click", () => {
  if (!decrypted_text.value) return;
  encrypt(decrypted_text.value, shift_amount.value ? shift_amount.value : 0);
});

function encrypt(text, shift) {
  let cipher = "";
  for (let i = 0; i < text.length; i++) {
    const letter = text.charAt(i);
    if (letter === " ") {
      cipher += letter;
    } else {
      const position = alphabet.indexOf(letter);
      const new_position = position + parseInt(shift);
      let new_letter = "";
      if (new_position < alphabet.length) {
        new_letter = alphabet[new_position];
      } else {
        new_letter = alphabet[new_position - alphabet.length];
      }
      cipher += new_letter;
    }
  }

  encrypted_text.value = cipher;
}

function decrypt() {}
