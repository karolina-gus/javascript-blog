{
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
    
      /* [done] find the correct article using the selector (value of 'href' attribute) */
    
      const targetArticle = document.querySelector(articleSelector);
      console.log(targetArticle);

      /* [done] add class 'active' to the correct article */

      targetArticle.classList.add('active');
      console.log('targetArticle', targetArticle);



    
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function generateTitleLinks(){

    /* [done] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

  }

  generateTitleLinks();  

  const links = document.querySelectorAll('.titles a');
    
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}