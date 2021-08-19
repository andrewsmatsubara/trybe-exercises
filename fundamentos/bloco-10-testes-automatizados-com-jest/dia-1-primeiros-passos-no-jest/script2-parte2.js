function techList(arrayTec, nome) {
	if(arrayTec.length === 0){
		return 'Vazio!';
	}
	const arr = [];
	arrayTec.forEach((tec) => {
		const obj = { tech: tec, name: nome };
		arr.push(obj);
	});
	return arr.sort((a, b) => a.tech.localeCompare(b.tech));
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

module.exports = techList;