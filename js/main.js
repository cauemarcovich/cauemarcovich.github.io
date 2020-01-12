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
    data.forEach(function(el, i) {
        var content = $(`
         <div class='gd-slide-content'>
             <div class='slide-content-info'>
                <div class="content-game-image">
                    <div class="game-info-background">
                        <img class='game-info-image' src="img/game_dev/${el.portfolio_info.picture}.png">
                        <div class="alpha-overlay"></div>
                    </div>
                    <img class="play-button" src="img/icons/play_button.png">
                 </div>
                 <div class="content-game-info">
                     <h3 class='game-info-title'>${el.name}</h3>
                     <label class='game-info-description'>${el.portfolio_info.summary_PT}</label>
                     <div class='game-info-tools'>
                         <h4>TECNOLOGIAS</h4>
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

        $('#gd-slide').append(content);
        $('.gd-nav-container').append(`<div class="nav-dot ${i == 0 ? 'active' : ''}"></div>`);
    });
}

function fillWebDev(data) {
    data.forEach(function(el, i) {
        var content = $(`
         <div class='wd-slide-content'>
             <div class='slide-content-info'>
                 <img class='web-info-image' src="img/web_dev/${el.portfolio_info.picture}.png">
                 <div class="content-web-info">
                     <h3 class='web-info-title'>${el.company}</h3>
                     <label class='web-info-year'>${formatDate(el.startDate, el.endDate)}</label>
                     <label class='web-info-description'>${el.portfolio_info.summary_PT}</label>
                     <div class='web-info-tools'>
                         <h4>TECNOLOGIAS</h4>
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

        $('#wd-slide').append(content);
        $('.wd-nav-container').append(`<div class="nav-dot ${i == 0 ? 'active' : ''}"></div>`);
    });
}

function fillSkills(data) {
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
    $.ajax({
        url: 'https://gist.githubusercontent.com/cauemarcovich/b1c99dc9555aaf02e8dfae79ce14b4a1/raw/04af4bf217d31d23d2c922e6ed6a2c95095289d1/resume.json',
        type: "GET",
        dataType: "json",
    }).done(function(data) {
        fillGameDev(data.publications);
        fillWebDev(data.work);

        loaderSliders();
    });
    $.ajax({
        url: 'https://gist.githubusercontent.com/cauemarcovich/b1c99dc9555aaf02e8dfae79ce14b4a1/raw/04af4bf217d31d23d2c922e6ed6a2c95095289d1/resume_skills.json',
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