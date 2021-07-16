$('.responsive-tabs').each(function(){
	$(this).responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: false,
        active: ACC.activeTab,
        activate: function (event, tab) {
            var $sliders = tab.panel.find('.flexslider');
            if ($sliders.length > 0)
            {
                $sliders.data('flexslider').resize();
            }
        }
    });
});
