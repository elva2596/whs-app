// 一些工具类函数
// 更加精准的检测对象类型
const detectorClass = (obj)=>{
	return Object.prototype.toString.call(obj).slice(8,-1)
}
// deepClone(深度克隆)
const deepClone = (function deepClone(obj){
	let result,
		oClass = detectorClass(obj);
	if(oClass==='Object'){
		result = {}
	}else if(oClass==='Array'){
		result =  []
	}else{
		return obj
	}
	for(let key in obj){
			if(detectorClass(obj[key])==='Object'||detectorClass(obj[key])==='Array'){
			result[key]  = deepClone(obj[key])
			}else{
				// 这里判断是否是原型上的方法，如果是则把方法添加到新对象的原型上
				result[key] = obj[key]
			}
	}
	return result
})

// 使用寄生组合的方式来实现继承，这里让子类的原型等于父类原型的一个副本
const inheritPrototype = (subType,superType)=>{
	var prototype = Object.create(superType.prototype)//相当于对父类型的原型进行一次浅复制
	prototype.constructor = subType
	subType.prototype = prototype
}


// 判断设备是否是移动端

export {
	detectorClass,
	deepClone,
	inheritPrototype
}




