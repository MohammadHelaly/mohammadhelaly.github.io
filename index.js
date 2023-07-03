const successModal = new bootstrap.Modal("#contact-success-modal");
const failureModal = new bootstrap.Modal("#contact-failure-modal");
document
	.getElementById("contact-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		fetch(this.action, {
			method: this.method,
			body: new FormData(this),
		})
			.then(function (response) {
				if (response.ok) {
					successModal.show();
					document.getElementById("contact-form").reset();
				} else {
					failureModal.show();
				}
			})
			.catch(function (error) {
				failureModal.show();
			});
	});
