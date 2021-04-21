document.querySelector(".toggle").addEventListener('click', function() {
    this.classList.add("animate");
    this.classList.toggle('active');
+        document.querySelector('.night').classList.toggle('active');
    }, 150);
