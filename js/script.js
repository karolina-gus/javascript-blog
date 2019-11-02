/* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */


  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this; 
    console.log(event); 
    console.log('Link was clicked!');
  
    /* [done] remove class 'active' from all article links  */
    
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [done] add class 'active' to the clicked link */
    
     clickedElement.classList.add('active');
     console.log('clickedElement:', clickedElement);

    /* [done] remove class 'active' from all articles */
    
    const activeArticles = document.querySelectorAll('.posts .post.active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [done] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);
  
    /* find the correct article using the selector (value of 'href' attribute) */
  
    /* add class 'active' to the correct article */
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }