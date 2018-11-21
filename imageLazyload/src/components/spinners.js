let spinners = {
  small_circle: null
}

function createSpinner(type) {
  let sc = spinners[type] = document.createElement('div')
  let img_svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
  let img_path1 = document.createElementNS('http://www.w3.org/2000/svg','path')
  let img_path2 = document.createElementNS('http://www.w3.org/2000/svg','path')
  let img_animate = document.createElementNS('http://www.w3.org/2000/svg','animateTransform')
  let svg_container = null 
  
  sc.className = 'loader loader--style1'
  sc.innerHTML = ``
  
  svg_container = sc.appendChild(img_svg)
  svg_container.appendChild(img_path1)
  svg_container.appendChild(img_path2).appendChild(img_animate)
  
//  img_svg.setAttribute('version', '1.1')
//  img_svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
//  img_svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink')
//  img_svg.setAttribute('xml:space', 'preserve')
//  img_svg.setAttribute('id', 'small_circle')
  img_svg.setAttribute('x', '0px')
  img_svg.setAttribute('y', '0px')
  img_svg.setAttribute('width', '40px')
  img_svg.setAttribute('height', '40px')
  img_svg.setAttribute('viewBox', '0 0 40 40')
  img_svg.setAttribute('enable-background', 'new 0 0 40 40')
  
  img_path1.setAttribute('opacity', '0.2')
  img_path1.setAttribute('fill', '#000')
  img_path1.setAttribute('d', 'M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z')
  
  img_path2.setAttribute('fill', '#000')
  img_path2.setAttribute('d', 'M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z')
  
  img_animate.setAttribute('attributeType', 'xml')
  img_animate.setAttribute('attributeName', 'transform')
  img_animate.setAttribute('type', 'rotate')
  img_animate.setAttribute('from', '0 20 20')
  img_animate.setAttribute('to', '360 20 20')
  img_animate.setAttribute('dur', '0.5s')
  img_animate.setAttribute('repeatCount', 'indefinite')
  
  return sc
}

export default createSpinner