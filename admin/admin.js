fetch("../admin/content.json")
  .then(response => response.json())
  .then(data => {
    const currentPage = document.body.getAttribute("data-page");

    if (data[currentPage]) {

      pageName = data[currentPage];
      Object.keys(pageName).forEach(sectionClass => {
        let section = document.querySelector(`.${sectionClass}`);
        if (section) {
          Object.keys(pageName[sectionClass]).forEach(elementClass => {
            let element = section.querySelector(`.${elementClass}`);
            if (element) {
              let contentData = pageName[sectionClass][elementClass];
              let dataType = contentData.type;
              if (dataType != 'object') {
                element[dataType] = contentData.content;
              } else {
                Object.keys(contentData.content).forEach(innerElementClass => {
                  let innerElement = element.querySelector(`.${innerElementClass}`);
                  if (innerElement) {
                    let innerContent = contentData.content[innerElementClass];
                    let dataType = innerContent.type;
                    innerElement[dataType] = innerContent.content;
                  }
                });
              }
            }
          });
        }
      });
    }
  })
  .catch(error => console.error("Error loading content:", error));