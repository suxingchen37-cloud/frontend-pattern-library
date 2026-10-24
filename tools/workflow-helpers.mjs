// Markup helpers used only while authoring this batch; emitted assets remain independent.
export const button = (key, text) => `<button type="button" data-${key}>${text}</button>`;
export const field = (key, text, value='', type='text') => `<label>${text}<input data-${key} type="${type}" value="${value}"></label>`;
export const area = (key, text, value='') => `<label>${text}<textarea data-${key} rows="3">${value}</textarea></label>`;
export const select = (key, text, options) => `<label>${text}<select data-${key}>${options.map(([value,label])=>`<option value="${value}">${label}</option>`).join('')}</select></label>`;
export const checks = (key, labels) => `<fieldset><legend>${key==='choice'?'可选项目':'本地示例'}</legend>${labels.map((label,i)=>`<label><input type="checkbox" data-${key} value="${i}"> ${label}</label>`).join('')}</fieldset>`;
