
  const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');
  
  let lastChecked;
  
    function handelCheck(e){
      let inBetween = false;
      if (e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
          console.log(checkbox);
          if (checkbox === this || checkbox === lastChecked){
            inBetween = !inBetween;
          }
          if (inBetween){
            checkbox.checked = true;
          }
        });
  
      }
  
  
      lastChecked = this;
  
    }
  
    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handelCheck));
  