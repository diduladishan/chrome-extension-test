function addButtonToPosts() {
  const posts = document.querySelectorAll('.feed-shared-update-v2');
  posts.forEach((post) => {
    if (!post.querySelector('.boost-button')) {
      const button = document.createElement('button');
      button.innerText = 'Boost';
      button.className = 'boost-button';
      button.addEventListener('click', () => {
        console.log('boost button clicked!');
      });

      const actionsContainer = post.querySelector(
        '.social-details-social-counts'
      );
      actionsContainer.appendChild(button);
    }
  });
}

window.addEventListener('load', addButtonToPosts);

const observer = new MutationObserver(addButtonToPosts);
observer.observe(document.body, { subtree: true, childList: true });
