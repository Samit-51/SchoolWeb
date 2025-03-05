fetch("content.json")
  .then(response => response.json())
  .then(data => {
    Object.keys(data).forEach(sectionClass => {
      let section = document.querySelector(`.${sectionClass}`);
      if (section) {
        Object.keys(data[sectionClass]).forEach(elementClass => {
          let element = section.querySelector(`.${elementClass}`);
          if (element) {
            let contentData = data[sectionClass][elementClass];
            let dataType = contentData.type;
            if(dataType != 'object'){
              element[dataType] = contentData.content;
            }else{
              Object.keys(contentData.content).forEach(innerElementClass => {
                let innerElement = element.querySelector(`.${innerElementClass}`);
                if(innerElement){
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
  })
  .catch(error => console.error("Error loading content:", error));