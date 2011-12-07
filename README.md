# jquery-tree-select

This plugin takes code that looks like this:

    <select class="multitier" name="my_select">
     <option value="">(none)</option>
     <option value="1">Category 1</option>
     <option value="2">Category 1 &gt; Subcategory 1</option>
     <option value="3">Category 1 &gt; Subcategory 2</option>
     <option value="4">Category 2</option>
     <option value="5">Category 2 &gt; Subcategory 1</option>
     <option value="6">Category 2 &gt; Subcategory 2</option>
     <option value="7">Category 2 &gt; Subcategory 3</option>
     <option value="8">Category 2 &gt; Subcategory 4</option>
     <option value="9">Category 2 &gt; Subcategory 4 &gt; Subsubcategory 1</option>
     <option value="10">Category 2 &gt; Subcategory 4 &gt; Subsubcategory 2</option>
    </select>
   
... and transforms it into a select box that just shows (none), Category 1, and Category 2.  Then when you click on Category 1, a new select box pops up showing Subcategory 1 and Subcategory 2.

There is no configuration.  Just give your <select> a class="multitier" and you are good to go.
  
Note:  after releasing this, I then found this project, which seems to be a much more complete version of what I was trying to do:

http://code.google.com/p/jquery-option-tree/

With that said, I still think mine's pretty simple and cool.