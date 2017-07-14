'use strict';

function typewriter(target, tempo) {
			var minSpeed;
			var maxSpeed;
			var speed = {
						slow: { minRange: 700, maxRange: 1000 },
						medium: { minRange: 300, maxRange: 700 },
						fast: { minRange: 100, maxRange: 300 }
			};
			setSpeed();
			function setSpeed(tempo) {
						if (tempo in speed) {
									minSpeed = speed[tempo].minRange;
									maxSpeed = speed[tempo].minRange;
						} else {
									minSpeed = 300;
									maxSpeed = 700;
						}
						return Promise.resolve();
			}

			function typeWord(word) {
						return new Promise(function (resolve, reject) {
									target.classList.add('js-typeit--print');
									if (!word) {
												word = target.innerHTML;
												target.innerHTML = "";
									}
									type(word);
									function type(letters) {
												if (!letters.length) {
															target.classList.remove('js-typeit--print');
															resolve("word");
															return;
												}
												target.innerHTML += letters.slice(0, 1);
												setTimeout(function () {
															type(letters.slice(1));
												}, randomTypeSpeed());
									}
						});
			}

			function eraser(num) {
						return new Promise(function (resolve, reject) {
									var text = target.innerHTML;
									setTimeout(function () {
												deleteSymbol(num);
									}, randomTypeSpeed());
									function deleteSymbol(n) {
												if (n == 0) {
															resolve("success");
															return;
												}
												target.innerHTML = text.slice(0, -1);
												text = text.slice(0, -1);
												setTimeout(function () {
															deleteSymbol(n - 1);
												}, randomTypeSpeed());
									}
						});
			}

			function eraseAll() {
						return eraser(target.innerHTML.length);
			}
			function randomTypeSpeed() {
						return Math.round(Math.random() * (maxSpeed - minSpeed) + minSpeed);
			}
			function dealWithIt(actions) {
						var promise = Promise.resolve("success");
						actions.forEach(function (el) {
									for (var prop in el) {
												promise = promise.then(function () {
															return operations[prop](el[prop]);
												});
									}
						});
			}
			var operations = {
						word: typeWord,
						lettersToErase: eraser,
						eraseAll: eraseAll,
						dealWithIt: dealWithIt,
						setSpeed: setSpeed
			};
			return operations;
}