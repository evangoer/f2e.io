*************
Array.forEach
*************

.. highlight:: js

.. csv-table::
    :header: Chrome, Firefox, IE, Safari

    4, 1.5, 9, 3.2


Synopsis
========

.. js:function:: Array.forEach(callbackFn[, thisArg])

    :param Function callbackFn: A callback function, executed once for each element 
        in the array that has not been deleted or otherwise made ``undefined``.
        The callback receives three arguments:

        * the array element's value
        * the array element's numeric index
        * the array that ``forEach()`` is traversing

    :param Object thisArg: An object to supply as the ``this`` value within the callback.
        If not supplied, ``this`` within the callback is ``undefined``.


Description
===========

:js:func:`forEach` traverses an array in ascending order,
executing a callback function for each populated element of the array.

:js:func:`forEach` does not mutate the array by default,
but the callback function is free to do so.
If the array mutates after you call :js:func:`forEach`, then:

* any appended elements are ignored
* deleted elements that have not yet been traversed are ignored
* changed elements that have not yet been traversed use the *new* element value


Examples
========

Iterating with a Basic Callback Function
----------------------------------------

The example uses a ``greet()`` callback function to
echo both elements of the array to the console.

.. literalinclude:: ex/forEach-basic.js


Using an Object Method as the Callback
--------------------------------------

In this variation, ``greet()`` not only prints the array index,
but also resides on a ``helloApi`` object. Passing in ``helloApi``
as the ``thisArg`` argument enables ``greet()`` to execute in
the proper context.

.. literalinclude:: ex/forEach-thisArg.js
