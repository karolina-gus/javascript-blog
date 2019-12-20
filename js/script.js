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
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';


  function generateTitleLinks(){

    /* [done] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* [done] for each article */

    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
    for(let article of articles) { 

      /* [done] get the article id */

      const articleId = article.getAttribute('id');
      console.log(articleId);

      /* [done] find the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log(articleTitle);

      /* [done] get the title from the title element */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log(linkHTML);

      /* create HTML of the link */

      /* insert link into titleList */
    
      titleList.insertAdjacentHTML('beforeend', linkHTML);
      console.log(titleList);
  
      const links = document.querySelectorAll('.titles a');
      console.log(links);

      for(let link of links){
        link.addEventListener('click', titleClickHandler);
      }


    }
  }

  generateTitleLinks();  
  console.log(generateTitleLinks);
  
  function generateTags(){

    /* [done] find all articles */
    const articles = document.querySelectorAll(optArticleTagsSelector);
    console.log(articles);
  
    /* [done] START LOOP: for every article: */
    for(let article of articles) {
  
      /* [done] find tags wrapper */
      const titleList = article.querySelector(optArticleTagsSelector);
  
      /* [done] make html variable with empty string */
      let html = '';
  
      /* [done] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log(articleTags);
  
      /* [done] split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);
  
      /* START LOOP: for each tag */

  
      /* generate HTML of the link */
  
      /* add generated code to html variable */
  
      /* END LOOP: for each tag */
  
      /* insert HTML of all the links into the tags wrapper */
  
      /* END LOOP: for every article: */

    }
  }
  
  generateTags();

}