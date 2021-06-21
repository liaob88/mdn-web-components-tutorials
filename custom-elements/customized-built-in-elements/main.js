class ExpandingList extends HTMLUListElement {
  constructor() {
    self = super();

    const uls = Array.from(self.querySelectorAll('ul'));
    const lis = Array.from(self.querySelectorAll('li'));

    uls.forEach((ul) => {
      ul.style.display = 'none';
    });

    lis.forEach((li) => {
      if (li.querySelectorAll('ul').length > 0) {
        li.setAttribute('class', 'closed');
        // 今回の場合、childNodes は [<li>, <ul>, /n] となる
        // li.childNodes[0]; は li のテキスト内容が入る
        const childText = li.childNodes[0];
        const newSpan = document.createElement('span');

        newSpan.textContent = childText.textContent;

        newSpan.style.cursor = 'pointer';
        newSpan.onclick = self.showul;

        childText.parentNode.insertBefore(newSpan, childText); // この時点で li の中の text が最初のものと上で追加した span の二つが表示される
        childText.parentNode.removeChild(childText); // 最初の text を削除(span のみにする)
      }
    });
  }

  showul = function (e) {
    const nextul = e.target.nextElementSibling;
    if (nextul.style.display == 'block') { // 開いてたら
      nextul.style.display = 'none';
      nextul.parentNode.setAttribute('class', 'closed');
    } else {　// 閉じてたら
      nextul.style.display = 'block';
      nextul.parentNode.setAttribute('class', 'open');
    }
  };
}
customElements.define('expanding-list', ExpandingList, { extends: 'ul' });
