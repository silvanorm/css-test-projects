const createFooter = () => {
  let footer = document.querySelector('footer')

  footer.innerHTML = `
    <div class="footer-content">
      <img src="img/light-logo.png" alt="" class="logo" />
      <div class="footer-ul-container">
        <ul class="category">
          <li class="category-title">men</li>
          <li><a href="#" class="footer-link">t-shirts</a></li>
          <li><a href="#" class="footer-link">sweatshirts</a></li>
          <li><a href="#" class="footer-link">shirts</a></li>
          <li><a href="#" class="footer-link">jeans</a></li>
          <li><a href="#" class="footer-link">trousers</a></li>
          <li><a href="#" class="footer-link">shoes</a></li>
          <li><a href="#" class="footer-link">casuals</a></li>
          <li><a href="#" class="footer-link">formals</a></li>
          <li><a href="#" class="footer-link">sports</a></li>
          <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        <ul class="category">
          <li class="category-title">women</li>
          <li><a href="#" class="footer-link">t-shirts</a></li>
          <li><a href="#" class="footer-link">sweatshirts</a></li>
          <li><a href="#" class="footer-link">shirts</a></li>
          <li><a href="#" class="footer-link">jeans</a></li>
          <li><a href="#" class="footer-link">trousers</a></li>
          <li><a href="#" class="footer-link">shoes</a></li>
          <li><a href="#" class="footer-link">casuals</a></li>
          <li><a href="#" class="footer-link">formals</a></li>
          <li><a href="#" class="footer-link">sports</a></li>
          <li><a href="#" class="footer-link">watch</a></li>
        </ul>
      </div>
    </div>

    <p class="footer-title">about company</p>
    <p class="info">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quis
      nisi aut quaerat quasi dolor ad, iste dolores eius neque, hic amet ex
      expedita delectus at unde doloribus laborum nesciunt. Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Dignissimos, dolores. Doloremque
      deserunt est impedit quasi! Aliquam assumenda excepturi porro vel quod
      a, adipisci at quibusdam aperiam corrupti ducimus, ea aliquid? Lorem
      ipsum dolor, sit amet consectetur adipisicing elit. Rerum blanditiis
      harum sint nesciunt quia hic consequatur aut aliquid voluptatum tempore
      quam amet ratione, optio odio nobis incidunt beatae repellat totam.
    </p>
    <p class="info">
      support emails - help@clothing.com, customersupport@clothing.com
    </p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
      <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
      </div>
      <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
      </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
  `
}

createFooter()
