function similarProducts() {
    const element = document.createElement('section')
    element.classList.add('similarProducts')
    element.innerHTML = `
    <h2 class="similarProducts__header">Products like this</h2>
            <div class="similarProducts__images">
                <div class="similarProducts__currentImageDiv">
                    <a href="#"><img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage"></a>
                    <div class="productImagesCurrentImage__disc">
                        <h3>Marshall Mini</h3>
                        <p>49.99€</p>
                    </div>
                </div>
                <div class="similarProducts__currentImageDiv">
                    <a href="#"><img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage"></a>
                    <div class="productImagesCurrentImage__disc">
                        <h3>Marshall Mini</h3>
                        <p>49.99€</p>
                    </div>
                </div>
                <div class="similarProducts__currentImageDiv">
                    <a href="#"><img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage"></a>
                    <div class="productImagesCurrentImage__disc">
                        <h3>Marshall Mini</h3>
                        <p>49.99€</p>
                    </div>
                </div>

            </div>
    
    `
    
    // Code here
    
    return element
}
export default similarProducts


/*
<section class="similarProducts">
            <h2 class="similarProducts__header">Products like this</h2>
            <div class="similarProducts__images">
                <div class="similarProducts__currentImageDiv">
                    <a href="#"><img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage"></a>
                    <div class="productImagesCurrentImage__disc">
                        <h3>Marshall Mini</h3>
                        <p>49.99€</p>
                    </div>
                </div>
                <div class="similarProducts__currentImageDiv">
                    <a href="#"><img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage"></a>
                    <div class="productImagesCurrentImage__disc">
                        <h3>Marshall Mini</h3>
                        <p>49.99€</p>
                    </div>
                </div>
                <div class="similarProducts__currentImageDiv">
                    <a href="#"><img src="/images/placeholder_img.jpg" alt="" class="productImagesCurrentImage"></a>
                    <div class="productImagesCurrentImage__disc">
                        <h3>Marshall Mini</h3>
                        <p>49.99€</p>
                    </div>
                </div>

            </div>
        </section>

        <script src=""></script>
        <script src=""></script>
        <script>
            feather.replace()
        </script>*/