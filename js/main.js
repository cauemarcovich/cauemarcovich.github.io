function formatDate(sd, ed) {
    var startDate = sd.split('-');
    var _startDate = `${startDate[1]}/${startDate[0]}`;

    var _endDate = '';
    if (ed) {
        var endDate = ed.split('-')
        _endDate = `${endDate[1]}/${endDate[0]}`;
    } else {
        _endDate += 'atual';
    }

    return `${_startDate} ~ ${_endDate}`;
}

function scrollToHash(hash) {
    if (hash !== "") {
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
}

function fillGameDev(data) {
    $('#gd-slide').html('');
    $('.arrow, .gd-nav-container').removeAttr('hidden');

    data.forEach(function(el, i) {
        var content = null;
        if (jQuery.isEmptyObject(el)) {
            content = $(`<div class='gd-slide-content'><div class='slide-content-info'></div></div>`);
        } else {
            content = $(`
            <div class='gd-slide-content'>
                <div class='slide-content-info'>
                    <div class="content-game-image">
                        <div class="game-info-background">
                            <img class='game-info-image' src="img/game_dev/${el.portfolio_info.picture}.png">
                            <div class="alpha-overlay"></div>
                        </div>
                        <div class='content-game-button'>
                            <a href='#' class='play-button'>      
                                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In  -->
                                <svg version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                                    x="0px" y="0px" width="213.7px" height="213.7px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7"
                                    xml:space="preserve">  
                                    <polygon class='triangle' id="XMLID_18_" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="
                                        73.5,62.5 148.5,105.8 73.5,149.1 "/>        
                                    <circle class='circle' id="XMLID_17_" fill="none"  stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="content-game-info">
                        <h3 class='game-info-title'>${el.name}</h3>
                        <label class='game-info-description'>${el.portfolio_info.summary_PT}</label>
                        <div class='game-info-tools'>
                            <h4>TECHNOLOGIES</h4>
                            <div class='game-info-tools__icons'>
                            </div>
                        </div>
                    </div>                 
                </div>
            </div>`);

            el.portfolio_info.tools.forEach(function(tool, idx) {
                var element = `<div data-tooltip='${el.portfolio_info.tools_tooltip[idx]}'>
                                <img class='sk-icon' src='img/tools/${tool}'>
                            </div>`;
                $('.game-info-tools__icons', content).append(element);
            });

            $('.content-game-image', content).on('click', function() {
                window.open(el.website);
            });
        }

        $('#gd-slide').append(content);
        if (i % 2 == 0) {
            $('.gd-nav-container').append(`<div class="nav-dot dot-anim ${i == 0 ? 'active' : ''}"></div>`);
        } else {
            $('.gd-nav-container').append(`<div class="nav-dot dot-anim" hidden></div>`);
        }
    });

}

function fillWebDev(data) {
    $('#wd-slide').html('');
    $('.arrow, .wd-nav-container').removeAttr('hidden');
    var content = null;

    data.forEach(function(el, i) {
        if (jQuery.isEmptyObject(el)) {
            content = $(`<div class='wd-slide-content'><div class='slide-content-info'></div></div>`);
        } else {
            content = $(`
                <div class='wd-slide-content'>
                    <div class='slide-content-info'>
                        <img class='web-info-image' src="img/web_dev/${el.portfolio_info.picture}.png">
                        <div class="content-web-info">
                            <h3 class='web-info-title'>${el.company}</h3>
                            <label class='web-info-year'>${formatDate(el.startDate, el.endDate)}</label>
                            <label class='web-info-description'>${el.portfolio_info.summary_PT}</label>
                            <div class='web-info-tools'>
                                <h4>TECHNOLOGIES</h4>
                                <div class='web-info-tools__icons'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);

            el.portfolio_info.tools.forEach(function(tool, idx) {
                var element = `<div data-tooltip='${el.portfolio_info.tools_tooltip[idx]}'>
                                <img class='sk-icon' src='img/tools/${tool}'>
                            </div>`;
                $('.web-info-tools__icons', content).append(element);
            });
        }

        $('#wd-slide').append(content);
        if (i % 2 == 0) {
            $('.wd-nav-container').append(`<div class="nav-dot ${i == 0 ? 'active' : ''}"></div>`);
        } else {
            $('.wd-nav-container').append(`<div class="nav-dot dot-anim" hidden></div>`);
        }
    });
}

function fillSkills(data) {
    $('.sk-container').html('');
    data.forEach(function(el) {
        var container = $(`
            <div class='sk-container-group'>
                <h5>${el.title}</h5>
                <div class='sk-group-content'></div>
            </div>
        `);
        var content = $('.sk-group-content', container);
        el.content.forEach(function(cont) {
            var icon = `<div data-tooltip='${cont.name}'>
                            <img class='sk-icon' src='img/tools/${cont.icon}'>
                        </div>`;
            content.append(icon);
        });

        $('.sk-container').append(container);
    });
}

$(document).ready(function() {
    // const teste = await $.ajax({
    //     url: 'https://gist.githubusercontent.com/cauemarcovich/19c9a4ec9b9b4a29a040cc9debeea0d5/raw/d6738c5383f412db5fea942e723ba23fd1311388/resume.json',
    //     type: "GET",
    //     dataType: "json"
    // });
    // var x = await teste();
    $.ajax({
        url: 'https://gist.githubusercontent.com/cauemarcovich/19c9a4ec9b9b4a29a040cc9debeea0d5/raw/9925f16eadfe930d594ba96203e5d97f97df3158/resume.json',
        type: "GET",
        dataType: "json"
    }).done(function(data) {
        console.log(data);
        fillGameDev(data.publications);
        fillWebDev(data.work);
        loaderSliders();
    }).fail(function(data, d, a, b, c) {
        console.log("Error:");
        console.log(data);
        console.log(d);
        console.log(a);
        console.log(b);
        console.log(c);
    });
    $.ajax({
        url: 'https://gist.githubusercontent.com/cauemarcovich/19c9a4ec9b9b4a29a040cc9debeea0d5/raw/9925f16eadfe930d594ba96203e5d97f97df3158/resume_skills.json',
        type: "GET",
        dataType: "json",
    }).done(function(data_skills) {
        fillSkills(data_skills);
    });


    $('.hd-links .scroll').each(function(i, el) {
        $(el).on('click', function(event) {
            event.preventDefault();
            scrollToHash(this.hash);
        })
    });
});