// Generated by CoffeeScript 1.9.2
(function () {
  var id_preset, id_presets, isInArray, konamiCode, loadPreset;

  window.loadGUI = function () {
    var f, ff, fm, fmm, gui_f, initPage, resizeGUI;
    window.p = {};
    p.exportConfig = function (type) {
      var data, data_css, pJS_GUI_Export, pJS_GUI_tmp, ratio;
      pJS_GUI_Export = {};
      pJS_GUI_tmp = window.pJS_GUI;
      pJSUtils.deepExtend(pJS_GUI_Export, pJS_GUI_tmp.options);
      ratio = pJS_GUI_tmp.canvas.pxratio;
      pJS_GUI_Export.particles.size.value = pJS_GUI_tmp.particles.size.value / ratio;
      pJS_GUI_Export.particles.size.anim.speed = pJS_GUI_tmp.particles.size.anim.speed / ratio;
      pJS_GUI_Export.particles.move.speed = pJS_GUI_tmp.particles.move.speed / ratio;
      pJS_GUI_Export.particles.line_linked.distance = pJS_GUI_tmp.particles.line_linked.distance / ratio;
      pJS_GUI_Export.interactivity.modes.grab.distance = pJS_GUI_tmp.interactivity.modes.grab.distance / ratio;
      pJS_GUI_Export.interactivity.modes.bubble.distance = pJS_GUI_tmp.interactivity.modes.bubble.distance / ratio;
      pJS_GUI_Export.particles.line_linked.width = pJS_GUI_tmp.particles.line_linked.width / ratio;
      pJS_GUI_Export.interactivity.modes.bubble.size = pJS_GUI_tmp.interactivity.modes.bubble.size / ratio;
      pJS_GUI_Export.interactivity.modes.repulse.distance = pJS_GUI_tmp.interactivity.modes.repulse.distance / ratio;
      data_css = pJS_GUI_Export.config_demo;
      delete pJS_GUI_Export.config_demo;
      delete pJS_GUI_Export.canvas;
      delete pJS_GUI_Export.particles.array;
      delete pJS_GUI_Export.interactivity.el;
      delete pJS_GUI_Export.interactivity.mouse;
      delete pJS_GUI_Export.interactivity.status;
      delete pJS_GUI_Export.particles.color.rgb;
      delete pJS_GUI_Export.particles.line_linked.color_rgb_line;
      if (type === 'json') {
        return console.save(pJS_GUI_Export, 'particlesjs-config.json');
      } else {
        data = {
          js: pJS_GUI_Export,
          css: data_css
        };
        return data;
      }
    };
    p.exportConfigJSON = function () {
      return p.exportConfig('json');
    };
    p.update = async function () {
      return await pJS_GUI.particles.refresh();
    };
    window.gui = new dat.GUI({
      autoPlace: true,
      closed: true,
      width: 340
    });
    window.pJS_GUI = window.pJSDom()[0];
    window.page_settings = {
      hide_card: false,
      background_color: '#111',
      background_image: 'http://globe-views.com/dcim/dreams/image/image-03.jpg'
    };
    gui_f = {
      particles: gui.addFolder('particles'),
      interactivity: gui.addFolder('interactivity'),
      pagecss: gui.addFolder('page background (css)')
    };
    f = {
      particles: {
        number: gui_f.particles.addFolder('number'),
        color: gui_f.particles.addFolder('color'),
        shape: gui_f.particles.addFolder('shape'),
        size: gui_f.particles.addFolder('size'),
        opacity: gui_f.particles.addFolder('opacity'),
        line_linked: gui_f.particles.addFolder('line_linked'),
        move: gui_f.particles.addFolder('move')
      },
      interactivity: {
        events_onhover: gui_f.interactivity.addFolder('onhover'),
        events_onclick: gui_f.interactivity.addFolder('onclick'),
        modes: gui_f.interactivity.addFolder('modes')
      }
    };
    ff = {
      shape_stroke: f.particles.shape.addFolder('stroke'),
      shape_polygon: f.particles.shape.addFolder('polygon'),
      shape_image: f.particles.shape.addFolder('image'),
      size_anim: f.particles.size.addFolder('anim'),
      opacity_anim: f.particles.opacity.addFolder('anim')
    };
    fm = {
      grab: f.interactivity.modes.addFolder('grab'),
      bubble: f.interactivity.modes.addFolder('bubble'),
      repulse: f.interactivity.modes.addFolder('repulse'),
      push: f.interactivity.modes.addFolder('push'),
      remove: f.interactivity.modes.addFolder('remove'),
      parallax: f.interactivity.events_onhover.addFolder('parallax')
    };
    fmm = {
      grab_linelinked: fm.grab.addFolder('line_linked')
    };
    gui.add(pJS_GUI.options, 'retina_detect').name('retina_detect').onChange(async function (value) {
      pJS_GUI.options.retina_detect = value;
      return await p.update();
    });
    gui.add(pJS_GUI.options, 'fps_limit', 0, 240).step(1).name('fps_limit').onChange(async function (value) {
      pJS_GUI.options.fps_limit = value;
      return await p.update();
    });
    f.particles.number.add(pJS_GUI.options.particles.number, 'value', 0, 600).name('value').step(1).onChange(async function (value) {
      pJS_GUI.options.particles.number.value = value;
      return await p.update();
    });
    f.particles.number.add(pJS_GUI.options.particles.number.density, 'enable').name('density.enable').onChange(async function (value) {
      pJS_GUI.options.particles.number.density.enable = value;
      return await p.update();
    });
    f.particles.number.add(pJS_GUI.options.particles.number.density, 'value_area', 0, 10000).name('density.value_area').onChange(async function (value) {
      pJS_GUI.options.particles.number.density.value_area = value;
      return await p.update();
    });
    f.particles.color.addColor(pJS_GUI.options.particles.color, 'value').name('value (single string)').onChange(async function (value) {
      pJS_GUI.options.particles.color.value = value;
      return await p.update();
    });
    f.particles.shape.add(pJS_GUI.options.particles.shape, 'type', ['circle', 'line', 'edge', 'triangle', 'polygon', 'star', 'image', 'heart'/*, 'char', 'character'*/]).name('type').onChange(async function (value) {
      pJS_GUI.options.particles.shape.type = value;
      return await p.update();
    });
    ff.shape_polygon.add(pJS_GUI.options.particles.shape.polygon, 'nb_sides', 3, 12).step(1).name('polygon.nb_sides').onChange(async function (value) {
      pJS_GUI.options.particles.shape.polygon.nb_sides = value;
      return await p.update();
    });
    ff.shape_stroke.add(pJS_GUI.options.particles.shape.stroke, 'width', 0, 20).step(1).name('stroke.width').onChange(async function (value) {
      pJS_GUI.options.particles.shape.stroke.width = value;
      return await p.update();
    });
    ff.shape_stroke.addColor(pJS_GUI.options.particles.shape.stroke, 'color').name('stroke.color').onChange(async function (value) {
      pJS_GUI.options.particles.shape.stroke.color = value;
      return await p.update();
    });
    ff.shape_image.add(pJS_GUI.options.particles.shape.image, 'src').name('image.src').onChange(async function (value) {
      var type;
      pJS_GUI.options.particles.shape.image.src = value;
      if (pJS_GUI.particles.shape.type === 'image') {
        type = value.substr(value.length - 3);
        if (type === 'svg' && value !== 'img/github.svg') {
          alert("Ajax request is necessary for loading SVG files. You can type this example into the 'image.src' input to solve the CORS issue: 'img/github.svg'");
        }
      }
      return await p.update();
    });
    ff.shape_image.add(pJS_GUI.options.particles.shape.image, 'width').name('image.width').onChange(async function (value) {
      pJS_GUI.options.particles.shape.image.width = value;
      return await p.update();
    });
    ff.shape_image.add(pJS_GUI.options.particles.shape.image, 'height').name('image.height').onChange(async function (value) {
      pJS_GUI.options.particles.shape.image.height = value;
      return await p.update();
    });
    f.particles.size.add(pJS_GUI.options.particles.size, 'value', 0, 500).name('value').onChange(async function (value) {
      pJS_GUI.options.particles.size.value = value;
      return await p.update();
    });
    f.particles.size.add(pJS_GUI.options.particles.size, 'random').name('random').onChange(async function (value) {
      pJS_GUI.options.particles.size.random = value;
      return await p.update();
    });
    ff.size_anim.add(pJS_GUI.options.particles.size.anim, 'enable').name('anim.enable').onChange(async function (value) {
      pJS_GUI.options.particles.size.anim.enable = value;
      return await p.update();
    });
    ff.size_anim.add(pJS_GUI.options.particles.size.anim, 'speed', 0, 300).name('anim.speed').onChange(async function (value) {
      pJS_GUI.options.particles.size.anim.speed = value;
      return await p.update();
    });
    ff.size_anim.add(pJS_GUI.options.particles.size.anim, 'size_min', 0, 100).name('anim.size_min').onChange(async function (value) {
      pJS_GUI.options.particles.size.anim.size_min = value;
      return await p.update();
    });
    ff.size_anim.add(pJS_GUI.options.particles.size.anim, 'sync').name('anim.sync').onChange(async function (value) {
      pJS_GUI.options.particles.size.anim.sync = value;
      return await p.update();
    });
    f.particles.opacity.add(pJS_GUI.options.particles.opacity, 'value', 0, 1).name('value').onChange(async function (value) {
      pJS_GUI.options.particles.opacity.value = value;
      return await p.update();
    });
    f.particles.opacity.add(pJS_GUI.options.particles.opacity, 'random').name('random').onChange(async function (value) {
      pJS_GUI.options.particles.opacity.random = value;
      return await p.update();
    });
    ff.opacity_anim.add(pJS_GUI.options.particles.opacity.anim, 'enable').name('anim.enable').onChange(async function (value) {
      pJS_GUI.options.particles.opacity.anim.enable = value;
      return await p.update();
    });
    ff.opacity_anim.add(pJS_GUI.options.particles.opacity.anim, 'speed', 0, 10).name('anim.speed').onChange(async function (value) {
      pJS_GUI.options.particles.opacity.anim.speed = value;
      return await p.update();
    });
    ff.opacity_anim.add(pJS_GUI.options.particles.opacity.anim, 'opacity_min', 0, 1).name('anim.opacity_min').onChange(async function (value) {
      pJS_GUI.options.particles.opacity.anim.opacity_min = value;
      return await p.update();
    });
    ff.opacity_anim.add(pJS_GUI.options.particles.opacity.anim, 'sync').name('anim.sync').onChange(async function (value) {
      pJS_GUI.options.particles.opacity.anim.sync = value;
      return await p.update();
    });
    f.particles.line_linked.add(pJS_GUI.options.particles.line_linked, 'enable').name('enable_auto').onChange(async function (value) {
      pJS_GUI.options.particles.line_linked.enable = value;
      return await p.update();
    });
    f.particles.line_linked.add(pJS_GUI.options.particles.line_linked, 'distance', 0, 2000).name('distance').onChange(async function (value) {
      pJS_GUI.options.particles.line_linked.distance = value;
      return await p.update();
    });
    f.particles.line_linked.addColor(pJS_GUI.options.particles.line_linked, 'color').name('color').onChange(async function (value) {
      pJS_GUI.options.particles.line_linked.color = value;
      return await p.update();
    });
    f.particles.line_linked.add(pJS_GUI.options.particles.line_linked, 'opacity', 0, 1).name('opacity').onChange(async function (value) {
      pJS_GUI.options.particles.line_linked.opacity = value;
      return await p.update();
    });
    f.particles.line_linked.add(pJS_GUI.options.particles.line_linked, 'width', 0, 20).name('width').onChange(async function (value) {
      pJS_GUI.options.particles.line_linked.width = value;
      return await p.update();
    });
    f.particles.move.add(pJS_GUI.options.particles.move, 'enable').name('enable').onChange(async function (value) {
      pJS_GUI.options.particles.move.enable = value;
      return await p.update();
    });
    f.particles.move.add(pJS_GUI.options.particles.move, 'direction', ['none', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left']).name('direction').onChange(async function (value) {
      pJS_GUI.options.particles.move.direction = value;
      return await p.update();
    });
    f.particles.move.add(pJS_GUI.options.particles.move, 'random').name('random').onChange(async function (value) {
      pJS_GUI.options.particles.move.random = value;
      return await p.update();
    });
    f.particles.move.add(pJS_GUI.options.particles.move, 'straight').name('straight').onChange(async function (value) {
      pJS_GUI.options.particles.move.straight = value;
      return await p.update();
    });
    f.particles.move.add(pJS_GUI.options.particles.move, 'speed', 0, 200).name('speed').onChange(async function (value) {
      pJS_GUI.options.particles.move.speed = value;
      return await p.update();
    });
    f.particles.move.add(pJS_GUI.options.particles.move, 'out_mode', ['out', 'bounce', 'bounce-vertical', 'bounce-horizontal']).name('out_mode').onChange(async function (value) {
      pJS_GUI.options.particles.move.out_mode = value;
      return await p.update();
    });
    f.particles.move.add(pJS_GUI.options.particles.move.attract, 'enable').name('attract.enable').onChange(async function (value) {
      pJS_GUI.options.particles.move.attract.enable = value;
      return await p.update();
    });
    f.particles.move.add(pJS_GUI.options.particles.move.attract, 'rotateX', 0, 10000).name('attract.rotateX').onChange(async function (value) {
      pJS_GUI.options.particles.move.attract.rotateX = value;
      return await p.update();
    });
    f.particles.move.add(pJS_GUI.options.particles.move.attract, 'rotateY', 0, 10000).name('attract.rotateY').onChange(async function (value) {
      pJS_GUI.options.particles.move.attract.rotateY = value;
      return await p.update();
    });
    gui_f.interactivity.add(pJS_GUI.options.interactivity, 'detect_on', ['window', 'canvas', 'parent']).name('detect_on').onChange(async function (value) {
      pJS_GUI.options.interactivity.detect_on = value;
      return await p.update();
    });
    f.interactivity.events_onhover.add(pJS_GUI.options.interactivity.events.onhover, 'enable').name('enable').onChange(async function (value) {
      pJS_GUI.options.interactivity.events.onhover.enable = value;
      return await p.update();
    });
    f.interactivity.events_onhover.add(pJS_GUI.options.interactivity.events.onhover, 'mode', ['grab', 'bubble', 'repulse']).name('mode').onChange(async function (value) {
      pJS_GUI.options.interactivity.events.onhover.mode = value;
      return await p.update();
    });
    fm.parallax.add(pJS_GUI.options.interactivity.events.onhover.parallax, 'enable').name('enable').onChange(async function (value) {
      pJS_GUI.options.interactivity.events.onhover.parallax.enable = value;
      return await p.update();
    });
    fm.parallax.add(pJS_GUI.options.interactivity.events.onhover.parallax, 'force', 0, 100).name('force').onChange(async function (value) {
      pJS_GUI.options.interactivity.events.onhover.parallax.force = value;
      return await p.update();
    });
    fm.parallax.add(pJS_GUI.options.interactivity.events.onhover.parallax, 'smooth', 0, 100).name('smooth').onChange(async function (value) {
      pJS_GUI.options.interactivity.events.onhover.parallax.smooth = value;
      return await p.update();
    });
    f.interactivity.events_onclick.add(pJS_GUI.options.interactivity.events.onclick, 'enable').name('enable').onChange(async function (value) {
      pJS_GUI.options.interactivity.events.onclick.enable = value;
      return await p.update();
    });
    f.interactivity.events_onclick.add(pJS_GUI.options.interactivity.events.onclick, 'mode', ['push', 'remove', 'bubble', 'repulse']).name('mode').onChange(async function (value) {
      pJS_GUI.options.interactivity.events.onclick.mode = value;
      return await p.update();
    });
    fm.grab.add(pJS_GUI.options.interactivity.modes.grab, 'distance', 0, 1500).name('distance').onChange(async function (value) {
      pJS_GUI.options.interactivity.modes.grab.distance = value;
      return await p.update();
    });
    fmm.grab_linelinked.add(pJS_GUI.options.interactivity.modes.grab.line_linked, 'opacity', 0, 1).name('opacity').onChange(async function (value) {
      pJS_GUI.options.interactivity.modes.grab.line_linked.opacity = value;
      return await p.update();
    });
     fm.bubble.add(pJS_GUI.options.interactivity.modes.bubble, 'distance', 0, 1500).name('distance').onChange(async function (value) {
       pJS_GUI.options.interactivity.modes.bubble.distance = value;
       return await p.update();
     });
     fm.bubble.add(pJS_GUI.options.interactivity.modes.bubble, 'size', 0, 500).name('size').onChange(async function (value) {
      pJS_GUI.options.interactivity.modes.bubble.size = value;
       return await p.update();
     });
    fm.bubble.add(pJS_GUI.options.interactivity.modes.bubble, 'opacity', 0, 1).name('opacity').onChange(async function (value) {
      pJS_GUI.options.interactivity.modes.bubble.opacity = value;
      return await p.update();
    });
    fm.bubble.add(pJS_GUI.options.interactivity.modes.bubble, 'duration', 0, 10).name('duration (sec)').onChange(async function (value) {
      pJS_GUI.options.interactivity.modes.bubble.duration = value;
      return await p.update();
    });
    fm.repulse.add(pJS_GUI.options.interactivity.modes.repulse, 'distance', 0, 1000).name('distance').onChange(async function (value) {
      pJS_GUI.options.interactivity.modes.repulse.distance = value;
      return await p.update();
    });
    gui_f.pagecss.addColor(pJS_GUI.options.config_demo, 'background_color').name('background-color').onChange(function (value) {
      return $('#particles-js').css('background-color', value);
    });
    gui_f.pagecss.add(pJS_GUI.options.config_demo, 'background_image').name('background-image url').onChange(function (value) {
      return $('#particles-js').css('background-image', 'url(' + value + ')');
    });
    gui_f.pagecss.add(pJS_GUI.options.config_demo, 'background_size').name('background-size').onChange(function (value) {
      return $('#particles-js').css('background-size', value);
    });
    gui_f.pagecss.add(pJS_GUI.options.config_demo, 'background_position').name('background-position').onChange(function (value) {
      return $('#particles-js').css('background-position', value);
    });
    gui_f.pagecss.add(pJS_GUI.options.config_demo, 'background_repeat').name('background-repeat').onChange(function (value) {
      return $('#particles-js').css('background-repeat', value);
    });
    gui_f.pagecss.add(pJS_GUI.options.config_demo, 'hide_card').name('hide card').onChange(function (value) {
      if (value) {
        $('.panel').fadeOut(200);
        return $('.js-box-bottom').fadeIn(200);
      } else {
        $('.panel').fadeIn(200);
        return $('.js-box-bottom').fadeOut(200);
      }
    });
    gui.add(pJS_GUI, 'exportImg').name('→ Export image (png)');
    gui.add(p, 'exportConfigJSON').name('→ Download current config (json)');
    initPage = function () {
      var box_bottom, config, page, panel;
      page = $(pJS_GUI.canvas.el).parent();
      panel = $('.panel');
      config = pJS_GUI.options.config_demo;

      console.log(config);

      box_bottom = $('.js-box-bottom');
      page.css({
        'background-color': config.background_color,
        'background-image': 'url(' + config.background_image + ')',
        'background-size': config.background_size,
        'background-repeat': config.background_repeat,
        'background-position': config.background_position
      });
      if (config.hide_card) {
        panel.css('display', 'none');
        box_bottom.css('display', 'block');
      } else {
        panel.css('display', 'block');
        box_bottom.css('display', 'none');
      }
      $('#loader').fadeOut(300);
      return $('body').addClass('loaded');
    };
    initPage();
    resizeGUI = function () {
      return $('.dg.main > ul').css('max-height', window.innerHeight - 105);
    };
    resizeGUI();
    $(window).on('resize', function () {
      return resizeGUI();
    });
    return $('.close-button').on('click', function () {
      return $('.box-top').css('width', $('.dg.main').width());
    });
  };

  window.loadStats = function () {
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = $('.js-count-particles');
    update = function () {
      stats.begin();
      stats.end();
      if (window.pJS_GUI.particles && window.pJS_GUI.particles.array) {
        count_particles.text(window.pJS_GUI.particles.array.length);
      }
      requestAnimationFrame(update);
    };
    return requestAnimationFrame(update);
  };

  (function (console) {
    console.save = function (data, filename) {
      var a, blob, e;
      if (!data) {
        console.error('Console.save: No data');
        return;
      }
      if (!filename) {
        filename = 'console.json';
      }
      if (typeof data === 'object') {
        data = JSON.stringify(data, void 0, 2);
      }
      blob = new Blob([data], {
        type: 'text/json'
      });
      e = document.createEvent('MouseEvents');
      a = document.createElement('a');
      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    };
  })(console);

  isInArray = function (value, array) {
    return array.indexOf(value) > -1;
  };

  $('.js-dp-label').on('click', function () {
    var dropdown, id, t;
    t = $(this);
    id = $(this).attr('data-dp');
    dropdown = $('.js-dp-dropdown[data-dp=' + id + ']');
    $('.js-dp-dropdown').fadeOut(200);
    $('.js-dp-label').not(t).removeClass('on');
    if (t.hasClass('on')) {
      dropdown.fadeOut(200);
    } else {
      dropdown.fadeIn(200);
    }
    return t.toggleClass('on');
  });

  konamiCode = function () {
    var k, n, pjs, pjs_style, playAudio, start, stop;
    k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    n = 0;
    pjs = $('#particles-js');
    pjs_style = null;
    playAudio = function () {
      var audio, src_path;
      audio = document.createElement('audio');
      src_path = window.location.origin + window.location.pathname + 'assets/medias/nyancat-loop.mp3';
      audio.setAttribute('src', src_path);
      audio.addEventListener('playing', start(audio));
      audio.addEventListener('ended', stop);
      return audio.play();
    };
    start = function (audio) {
      window.konami = true;
      pjs_style = pjs.attr('style');
      pjs.addClass('troll').css({
        'background-image': 'url(https://dl.dropboxusercontent.com/u/19580440/particlesjs-assets/kbLd9vb_new.gif)',
        'background-size': '75%',
        'background-position': '0 50%',
        'background-color': '#043564'
      });
      $('.panel').fadeOut(200);
      $('.js-box-bottom').fadeIn(200);
      return $(document).on('click keydown', function () {
        if (window.konami) {
          audio.pause();
          return stop();
        }
      });
    };
    stop = function () {
      window.konami = false;
      pjs.removeClass('troll').attr('style', pjs_style);
      if (!pJS_GUI.config_demo.hide_card) {
        $('.panel').fadeIn(200);
        return $('.js-box_bottom').fadeOut(200);
      }
    };
    return $(document).on('keydown', function (e) {
      if (e.keyCode === k[n++]) {
        if (n === k.length) {
          playAudio();
          n = 0;
          return false;
        }
      } else {
        return n = 0;
      }
    });
  };

  id_presets = ['test', 'default', 'star', 'snow', 'bubble', 'nyancat', 'nyancat2', 'nasa'];

  id_preset = window.location.hash.substring(1);

  if (!isInArray(id_preset, id_presets)) {
    id_preset = 'default';
  }

  loadPreset = function (preset) {
    window.location = window.location.origin + window.location.pathname + '#' + preset;
    return window.location.reload();
  };

  $('#js-select-preset li').on('click', function () {
    return loadPreset($(this).attr('data-val'));
  });

  $('#js-select-preset li').each(function (index) {
    var item;
    item = $('#js-select-preset li').eq(index);
    if (item.attr('data-val') === id_preset) {
      return $('.js-dp-label-presets').text(item.text());
    }
  });

  particlesJS.load('particles-js', `presets/${id_preset}.json`, function () {
    return $(function () {
      window.loadGUI();
      window.loadStats();
      return konamiCode();
    });
  });

}).call(this);
