jQuery(document).ready(function() {

    if ($(".filetree").treeview)
    {
        $(".filetree").treeview({
            collapsed:true,
            persist:"cookie"
        });
    }

    $("#accordion").accordion({
        collapsible:true,
        autoHeight:false,
        fillSpace:true
    });

    $("#marker-accordion").accordion({
        collapsible:true,
        autoHeight:false
    });

    $(".tabs").tabs();

    jQuery('.sidebar-nav-tree').before('<div class="search-bar"> \
    <a href="#"><img src="images/collapse_all.png" title="Collapse all" alt="Collapse all" /></a> \
    <a href="#"><img src="images/expand_all.png" title="Expand all" alt="Expand all" /></a> \
    <div><input type="search" /></div> \
</div>');

    jQuery('.sidebar-nav-tree a[0]').click(function() {
        jQuery(this).parent().next().find('.collapsable-hitarea').click();
        return false;
    });
    jQuery('.sidebar-nav-tree a[1]').click(function() {
        jQuery(this).parent().next().find('.expandable-hitarea').click();
        return false;
    });
    jQuery('.sidebar-nav-tree input').keyup(function() {
        tree_search(this);
    });

    $('div.code-tabs').hide();
    $('a.gripper').show();
    $('div.code-tabs:empty').prevAll('a.gripper').html('');

    $('a.gripper').click(function() {
        $(this).nextAll('div.code-tabs').slideToggle();
        $(this).children('img').toggle();
        return false;
    });

    $('code.title').click(function() {
        $(this).nextAll('div.code-tabs').slideToggle();
        $(this).prev().children('img').toggle();
    });

});