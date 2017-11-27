function ArrowGroup(option){
	var data = option.data || [];
	var ul = document.createElement('ul');
	data.forEach(function(item,index){
		var li = document.createElement('li');
		ul.appendChild(li);
		if(item.isShadowed){
			li.style.backgroundColor = '#F6F6F6';
			if(item.isCurrentStatus){
				li.style.backgroundColor = '#108ee9';
			}
		}
		li.className = "item";
		li.innerHTML = item.name;
		if(index == data.length - 1){
			var li = document.createElement('li');
			ul.appendChild(li);
				li.className = 'item last';
				li.innerHTML = '已中止';
		}
	});
	return ul;
}
