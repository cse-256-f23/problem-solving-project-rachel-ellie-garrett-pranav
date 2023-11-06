// ---- Define your dialogs  and panels here ----

//definitions panel
$('#sidepanel').html(`<h1>Helpful Definitions</h1>
                    <h2>Advanced Permissions: </h2>
                        <p>The Advanced Permissions button will take you to the advanced secruity settings.
                        When you click the edit more permissions button, you will directed to a more extensive list of permissions.</p>
                    <h2>Permissions:</h2>
                        <p>In file systems and databases, permissions determine who can access an object (like a file or folder)
                        and what they can do with it (read it, modify it, delete it, etc.).</p>
                    <h2>Inheritable permissions:</h2>
                        <p>Some systems allow permissions to be \"inherited\". This means that a file or folder can receive permissions based on the permissions of its parent folder.
                        So, if you have a folder that's set to be readable by a certain user, all the files and subfolders inside that folder might automatically be readable by that user too,
                        if they inherit permissions from the parent folder.</p>
                    <h2>This object's parent:</h2>
                        <p>This refers to the folder (or sometimes another type of object) immediately above the current object in the hierarchy.
                        If you think of your file system as a tree, the \"parent\" of any given file or folder is the folder it's directly inside of.</p>
                    <h2>Example Explained:</h2>
                        <p>When a user tries to do something (read, modify, delete, change permissions, …) to a file: First: Look at all of the direct (i.e. not inherited)
                        permissions that are set on this file for this user OR for any groups that this user is part of. if any of these are set to deny permission, then permission is denied.
                        (otherwise) if any of these are set to allow the permission, then the action is allowed to happen. If (a) there were no direct permissions for this user,
                        AND (b) inheritance is turned on for this file/folder, repeat the process above using the permissions for the parent folder. Lastly: if you have exhausted the options available via inheritance,
                        and still have not found any relevant permission settings, then permission is denied.</p>`);


// ---- Display file structure ----

// (recursively) makes and returns an html element (wrapped in a jquery object) for a given file object
function make_file_element(file_obj) {
    let file_hash = get_full_path(file_obj)

    if(file_obj.is_folder) {
        let folder_elem = $(`<div class='folder' id="${file_hash}_div">
            <h3 id="${file_hash}_header">
                <span class="oi oi-folder" id="${file_hash}_icon"/> ${file_obj.filename} 
                <button class="ui-button ui-widget ui-corner-all permbutton" path="${file_hash}" id="${file_hash}_permbutton"> 
                    <span class="oi oi-lock-unlocked" id="${file_hash}_permicon"> Click Here to Change Permissions</span> 
                </button>
            </h3>
        </div>`)

        // append children, if any:
        if( file_hash in parent_to_children) {
            let container_elem = $("<div class='folder_contents'></div>")
            folder_elem.append(container_elem)
            for(child_file of parent_to_children[file_hash]) {
                let child_elem = make_file_element(child_file)
                container_elem.append(child_elem)
            }
        }
        return folder_elem
    }
    else {
        return $(`<div class='file'  id="${file_hash}_div">
            <span class="oi oi-file" id="${file_hash}_icon"/> ${file_obj.filename}
            <button class="ui-button ui-widget ui-corner-all permbutton" path="${file_hash}" id="${file_hash}_permbutton"> 
            <span class="oi oi-lock-unlocked" id="${file_hash}_permicon"> Click Here to Change Permissions</span> 
            </button>
        </div>`)
    }
}

for(let root_file of root_files) {
    let file_elem = make_file_element(root_file)
    $( "#filestructure" ).append( file_elem);    
}



// make folder hierarchy into an accordion structure
$('.folder').accordion({
    collapsible: true,
    heightStyle: 'content'
}) // TODO: start collapsed and check whether read permission exists before expanding?


// -- Connect File Structure lock buttons to the permission dialog --

// open permissions dialog when a permission button is clicked
$('.permbutton').click( function( e ) {
    // Set the path and open dialog:
    let path = e.currentTarget.getAttribute('path');
    perm_dialog.attr('filepath', path)
    perm_dialog.dialog('open')
    //open_permissions_dialog(path)

    // Deal with the fact that folders try to collapse/expand when you click on their permissions button:
    e.stopPropagation() // don't propagate button click to element underneath it (e.g. folder accordion)
    // Emit a click for logging purposes:
    emitter.dispatchEvent(new CustomEvent('userEvent', { detail: new ClickEntry(ActionEnum.CLICK, (e.clientX + window.pageXOffset), (e.clientY + window.pageYOffset), e.target.id,new Date().getTime()) }))
});


// ---- Assign unique ids to everything that doesn't have an ID ----
$('#html-loc').find('*').uniqueId() 