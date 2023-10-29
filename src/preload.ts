window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector: string, text: string | undefined) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text ? text : `No text for ${selector} selector`
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })