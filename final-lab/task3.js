        let price_field = document.querySelector('.price')
        let promo_field = document.querySelector('.promo')
        let calc_btn = document.querySelector('.btn')
        let result_field = document.querySelector('.result')

        function check_promo() {
			let price = document.querySelector('.price').value
			let promo = document.querySelector('.promo').value
			let res = document.querySelector('.result')
			if (promo == 'noborders' && price >= 10000) {
				res.innerHTML = 0.9*price
			}
			else {
				res.innerHTML = price
			}

        }
        calc_btn.addEventListener('click', check_promo)
