// 根据标签中的文字，找到对应的标签
export function findElsByText(elBody, keyText) {
  console.log(elBody, keyText);
  const targetEls = [];
  const bodyChildren = elBody.children;
  for (let i = 0; i < bodyChildren.length; i++) {
    const isInclude = bodyChildren[i].innerText.includes(keyText);
    if (isInclude) {
      targetEls.push(bodyChildren[i]);
    }
  }

  return targetEls;
}
