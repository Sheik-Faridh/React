export const defaultNames = {
  '.xls': 'New Excel Document',
  '.xlsm': 'New Excel Document',
  '.xlsx': 'New Excel Document',
  '.pps': 'New PowerPoint Document',
  '.ppt': 'New PowerPoint Document',
  '.pptx': 'New PowerPoint Document',
  '.png': 'New Image Document',
  '.jpeg': 'New Image Document',
  '.jpg': 'New Image Document',
  '.svg': 'New SVG Document',
  '.gif': 'New Gif Document',
  '.tiff': 'New Tiff Document',
  '.pdf': 'New PDF Document',
  '.doc': 'New Word Document',
  '.docx': 'New Word Document',
  '.txt': 'New Text Document',
  '.7z': 'New Compressed Document',
  '.arj': 'New Compressed Document',
  '.deb': 'New Compressed Document',
  '.pkg': 'New Compressed Document',
  '.rar': 'New Compressed Document',
  '.rpm': 'New Compressed Document',
  '.tar.gz': 'New Compressed Document',
  '.z': 'New Compressed Document',
  '.zip': 'New Compressed Document',
  '.html': 'New HTML Document',
  '.xml': 'New XML Document',
  '.css': 'New CSS Document',
  '.js': 'New JS Document',
  'default': 'New Unknown Document'
};

export const cancellablePromise = promise => {
    let isCanceled = false;
  
    const wrappedPromise = new Promise((resolve, reject) => {
      promise.then(
        value => (isCanceled ? reject({ isCanceled, value }) : resolve(value)),
        error => reject({ isCanceled, error }),
      );
    });
  
    return {
      promise: wrappedPromise,
      cancel: () => (isCanceled = true),
    };
}

const prefixZero = value => `${value}`.length > 1 ? value : `0${value}`

export const formatDate = date => {
  if(!date) return '--';
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${prefixZero(new Date(date).getDate())} ${monthNames[new Date(date).getMonth()]} ${new Date(date).getFullYear()} ${prefixZero(new Date(date).getHours())}:${prefixZero(new Date(date).getMinutes())}:${prefixZero(new Date(date).getSeconds())}`
}

export const delay = time => new Promise(resolve => setTimeout(resolve,time))

export const prefixNumberInAssetName = (name,number) => {
  const arr = name.split('.');
  const ext = arr.pop();
  return `${arr.join('.')}(${number}).${ext}`
}

export const showAssetNameWithoutExt = name => {
  const arr = name.split('.');
  arr.pop();
  return arr.join('.');
}

export const generateDefaultName = (type,ext) => type === 'folder' ? 'New Folder' : `${defaultNames[ext] || defaultNames.default}${ext}` 



