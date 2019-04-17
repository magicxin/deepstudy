ctx.lineWidth = 2;
      ctx.strokeStyle = '#000';
      ctx.beginPath();

      drawCurvePath(
        ctx, [0, 0], [200, 200],[300, 0]
      );

      ctx.stroke();
      /**
       * 绘制一条曲线路径
       * @param  {Object} ctx canvas渲染上下文
       * @param  {Array<number>} start 起点
       * @param  {Array<number>} end 终点
       * @param  {Array<number>} 过度点
       */
      function drawCurvePath(ctx, start, pass, end) {
        ctx.moveTo(start[0], start[1]);
        ctx.quadraticCurveTo(
          pass[0], pass[1],
          end[0], end[1]
        );
      }