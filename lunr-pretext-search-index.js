var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "s_sets_functions",
  "level": "1",
  "url": "s_sets_functions.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets and functions",
  "body": " Sets and functions    We gather here some notions about sets and functions.    Sets   Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set lying within another.   Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .     The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.   With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .     Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .     Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set intersection       set difference     set complement    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .       With the help of these set operations, we can now describe some common sets used in mathematics.   Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .    The power set of a set is the set of all subsets of .   Power set  power set    power set of    Given a set , its power set  is defined as the set of all subsets of .     Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .      Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function      Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   As with sets, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .     Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.       Tuples and Cartesian product  Next we introduce the notion of a tuple , which will both provide a rigorous foundation for the notion of an ordered sequence (or list), and vastly generalize that notion. Interestingly, as revealed in the next definition, a tuple is just a function by another name.   Tuple  tuple arbitrary    tuple indexed by    Let and be sets. An -valued tuple indexed by is a function . We call the indexing set of the tuple , and for all , we call the -th entry (or coordinate ) of . Furthermore, we will write to denote the function defined as for all .     Tuple versus function  As mentioned above, the introduction of tuple language and notation simply gives us another way of conceptualizing a function : one that let's us think of a function as a sort of sequence. Being able to fluently move between these two conceptions requires a little bit of practice. The following correspondence diagram can help in this regard:   Correspondence between functions and tuples   Correspondence between functions and tuples       Tuple equality  Fix a set , and let and be two tuples with entries in . When are these tuples equal? The answer is provided by our definition of function equality . By definition, the functions and are equal if and only if (i) (the indexing sets are equal), and (ii) for all . In terms of our tuple notation this means if and only if for all : , two tuples with the same indexing set are equal if and only if their -th coordinate is equal for all . Sound familiar? This is precisely how we define equality between two finite (ordered)sequences and . We make this observation more official in the next definition.    -tuples   Let be a set. An -tuple (or sequence of length ) with entries in is a tuple indexed by the set . We write or to denote the -tuple whose -th entry is for all .     We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.    Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.   The last definition indicates how our notion of tuple generalizes that of a finite sequence. As the next example illustrates, infinite sequences can also be considered as simply a particular type of tuple: one with indexing set .   Infinite sequence   Let be a set. An infinite sequence with entries in is a tuple of the form , for some . We write or to denote the tuple whose -th entry is for all .     Indexed collection of sets  In mathematics we often deal with indexed collections of sets: that is, a collection of sets indexed by some set . When all of the sets are subsets of a common set , we can make this notion rigorous with the concept of a tuple: namely, a collection of subsets of indexed by is just a tuple , where each is a subset of . More technically, this is just a function from to the power set of .    Cartesian product  Cartesian product    Cartesian product of the sets     -fold Cartesian product of     Cartesian product    Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  When for all , we denote as .  Additionally, in the special case where we write and , and we call the -fold Cartesian product of .  Lastly, in the special case where we write and .      Cardinality and countability   Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.   Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.        "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": " Sets  sets  sets empty sets  sets membership      set membership    A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_functions.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion (subsets).",
  "body": " Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_functions.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": " The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.  "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_functions.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "",
  "body": " Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .  "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_functions.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets intersection  sets complement  sets difference    set union     set intersection       set difference     set complement    Let and be subsets of a common set .   Set union  The union  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is any collection of subsets indexed by an arbitrary set , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": " Common mathematical sets  sets empty set  real numbers  integers  rational numbers     the empty set     real numbers     integers     positive integers     the set of all integers greater than or equal to     rational numbers    The empty set is the set containing no objects, denoted or .  We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . Additionally, for any integer we denote by the set of all integers : , . Lastly, we denote by the set of all positive integers: , .   "
},
{
  "id": "d_power_set",
  "level": "2",
  "url": "s_sets_functions.html#d_power_set",
  "type": "Definition",
  "number": "0.1.10",
  "title": "Power set.",
  "body": " Power set  power set    power set of    Given a set , its power set  is defined as the set of all subsets of .   "
},
{
  "id": "eg_power_set",
  "level": "2",
  "url": "s_sets_functions.html#eg_power_set",
  "type": "Example",
  "number": "0.1.11",
  "title": "Power set.",
  "body": " Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .   "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_sets_functions.html#d_function",
  "type": "Definition",
  "number": "0.1.12",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .   "
},
{
  "id": "ss_functions-3",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-3",
  "type": "Example",
  "number": "0.1.13",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "eg_addition_mult_as_functions",
  "level": "2",
  "url": "s_sets_functions.html#eg_addition_mult_as_functions",
  "type": "Example",
  "number": "0.1.14",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function    "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_sets_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.1.15",
  "title": "",
  "body": " Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .  "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.1.16",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_sets_functions.html#d_image",
  "type": "Definition",
  "number": "0.1.17",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_preimage_of_set",
  "level": "2",
  "url": "s_sets_functions.html#d_preimage_of_set",
  "type": "Definition",
  "number": "0.1.18",
  "title": "Preimage of set.",
  "body": " Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_sets_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.1.19",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "ss_functions-11",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-11",
  "type": "Example",
  "number": "0.1.20",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_sets_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.1.21",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_sets_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.1.22",
  "title": "Identity and inverse functions.",
  "body": " Identity and inverse functions  function invertible  function inverse  function identity   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .   "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_sets_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.1.23",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "d_Ituple",
  "level": "2",
  "url": "s_sets_functions.html#d_Ituple",
  "type": "Definition",
  "number": "0.1.24",
  "title": "Tuple.",
  "body": " Tuple  tuple arbitrary    tuple indexed by    Let and be sets. An -valued tuple indexed by is a function . We call the indexing set of the tuple , and for all , we call the -th entry (or coordinate ) of . Furthermore, we will write to denote the function defined as for all .   "
},
{
  "id": "rm_tuple_function",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_function",
  "type": "Remark",
  "number": "0.1.25",
  "title": "Tuple versus function.",
  "body": " Tuple versus function  As mentioned above, the introduction of tuple language and notation simply gives us another way of conceptualizing a function : one that let's us think of a function as a sort of sequence. Being able to fluently move between these two conceptions requires a little bit of practice. The following correspondence diagram can help in this regard:   Correspondence between functions and tuples   Correspondence between functions and tuples     "
},
{
  "id": "ss_tuples_cart_prod-5",
  "level": "2",
  "url": "s_sets_functions.html#ss_tuples_cart_prod-5",
  "type": "Remark",
  "number": "0.1.27",
  "title": "Tuple equality.",
  "body": " Tuple equality  Fix a set , and let and be two tuples with entries in . When are these tuples equal? The answer is provided by our definition of function equality . By definition, the functions and are equal if and only if (i) (the indexing sets are equal), and (ii) for all . In terms of our tuple notation this means if and only if for all : , two tuples with the same indexing set are equal if and only if their -th coordinate is equal for all . Sound familiar? This is precisely how we define equality between two finite (ordered)sequences and . We make this observation more official in the next definition.  "
},
{
  "id": "d_ntuple",
  "level": "2",
  "url": "s_sets_functions.html#d_ntuple",
  "type": "Definition",
  "number": "0.1.28",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-tuples.",
  "body": " -tuples   Let be a set. An -tuple (or sequence of length ) with entries in is a tuple indexed by the set . We write or to denote the -tuple whose -th entry is for all .   "
},
{
  "id": "rm_pairs_triples",
  "level": "2",
  "url": "s_sets_functions.html#rm_pairs_triples",
  "type": "Remark",
  "number": "0.1.29",
  "title": "",
  "body": " We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.  "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.1.30",
  "title": "",
  "body": " Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.  "
},
{
  "id": "d_infinite_sequence",
  "level": "2",
  "url": "s_sets_functions.html#d_infinite_sequence",
  "type": "Definition",
  "number": "0.1.31",
  "title": "Infinite sequence.",
  "body": " Infinite sequence   Let be a set. An infinite sequence with entries in is a tuple of the form , for some . We write or to denote the tuple whose -th entry is for all .   "
},
{
  "id": "ss_tuples_cart_prod-11",
  "level": "2",
  "url": "s_sets_functions.html#ss_tuples_cart_prod-11",
  "type": "Remark",
  "number": "0.1.32",
  "title": "Indexed collection of sets.",
  "body": " Indexed collection of sets  In mathematics we often deal with indexed collections of sets: that is, a collection of sets indexed by some set . When all of the sets are subsets of a common set , we can make this notion rigorous with the concept of a tuple: namely, a collection of subsets of indexed by is just a tuple , where each is a subset of . More technically, this is just a function from to the power set of .  "
},
{
  "id": "d_cartesian_product_arbitrary",
  "level": "2",
  "url": "s_sets_functions.html#d_cartesian_product_arbitrary",
  "type": "Definition",
  "number": "0.1.33",
  "title": "Cartesian product.",
  "body": " Cartesian product  Cartesian product    Cartesian product of the sets     -fold Cartesian product of     Cartesian product    Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -valued tuples whose -th coordinate is an element of for all .  When for all , we denote as .  Additionally, in the special case where we write and , and we call the -fold Cartesian product of .  Lastly, in the special case where we write and .   "
},
{
  "id": "d_cardinality",
  "level": "2",
  "url": "s_sets_functions.html#d_cardinality",
  "type": "Definition",
  "number": "0.1.34",
  "title": "Cardinality.",
  "body": " Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.   Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.      "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.2",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.         A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:       Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.      Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.    Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .       Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.     Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.     Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.     The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!     "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.2.2",
  "title": "",
  "body": "  A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:    "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.2.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": "  Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.   "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.2.5",
  "title": "",
  "body": "  Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .     "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.2.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.   "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.2.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.2.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.   "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.2.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.2.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.3",
  "title": "Proof techniques",
  "body": " Proof techniques  Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.   Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)    The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )      Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)   Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).    It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.    The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.  Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .      Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.       Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .  Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  By , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .    By The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .   Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      mathematical induction  Mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    mathematical induction weak induction  Proof by induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.     Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!  Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions          mathematical induction strong induction  Proof by strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.3.1",
  "title": "",
  "body": "  The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )   "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.3.2",
  "title": "",
  "body": "  It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.3.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.3.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.3.5",
  "title": "",
  "body": "  Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.   "
},
{
  "id": "sss_chain_equalities-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-4",
  "type": "Warning",
  "number": "0.3.6",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "ss_mathematical_induction-3-1",
  "level": "2",
  "url": "s_proof_technique.html#ss_mathematical_induction-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sss_weak_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "sss_weak_induction-5-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.3.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.   "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.3.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.3.9",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "sss_strong_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_strong_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.3.10",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_fields",
  "level": "1",
  "url": "s_fields.html",
  "type": "Section",
  "number": "1.1",
  "title": "Fields",
  "body": " Fields   Most first courses in linear algebra restrict their attention to vector spaces of the form . This is an example of a so-called real vector space (or -vector space , or vector space over the base field ), and one of a very particular sort (consisting of real -tuples). In this, a second course in linear algebra, we will generalize this approach along two different directions:   we will replace the specific base field with an arbitrary field (see );    we will consider not just vector spaces of -tuples, but general abstract vector spaces.   In this section we tackle the notion of an arbitrary field; in the next we introduce the definition of an abstract vector space.    Complex numbers  Before getting to the abstract definition of a field, we introduce what ends up being an important example of a field: the complex numbers.   Complex numbers, real and imaginary parts   The complex numbers is the set of all formal expressions of the form , where : , . Given a complex number , we call its real part , denoted , and we call its imaginary part , denoted : , we have .     Complex numbers  When introducing a complex number as , unless specified otherwise, it is assumed that .   You are justified in wondering what exactly is meant by a formal expression . A more correct formulation would be that a complex number is really just a pair of real numbers that for various reasons we denote as . Since it is somewhat awkward to write a complex number as , we will live with the ambiguity of , and identify complex numbers as pairs of real numbers via the map . To ensure that this is a well-defined bijection between and , we make official when two of our formal expressions are defined to be equal.   Complex equality   Complex numbers and are equal , denoted , if . In other words, we have .    For reasons that will be made more clear below, it is natural to identify the set of real numbers with the set of complex numbers of the form . This is the motivation behind the next definition.   Real and imaginary numbers   Let be a complex number. We say that is real if , and (purely) imaginary if . Henceforth we identify the real numbers with the real complex numbers: , we declare that . Furthermore we will use the following abbreviations for various real and purely imaginary complex numbers: .     Complex addition and multiplication   Let and be complex numbers.   Complex addition  We define the sum of and , denoted , as .    Complex multiplication  We define the product of and , denoted (or sometimes ) as .        Complex arithmetic   Let , . Compute the following complex numbers. Your answer must be expressed in the form , where .                   We have .    We have .          Compute .    We have, using the definition of multiplication, . Thus the element is seen to be a square-root of ! With a little more work, we can show that any complex number has a complex square-root. More on that later.     Complex arithmetic as extension of real arithmetic  Using the definition of complex multiplication, it is easy to see that given any real complex number , we have . In particular, given any two real complex numbers and , we have . In other words, when we restrict complex multiplication to the real complex numbers, we recover our familiar real multiplication operation. A similar statement applies for complex addition and real addition. In this sense, complex arithmetic is understood as an extension of real arithmetic.     As you will show yourself in homework, complex multiplication is commutative ( , we have for all ). As a result, we are free to write a complex number as . Oftentimes one of these expressions simply looks better typographically than the other.  Note that when writing and , where , it is still the case that if and only if and .    ensures that the map defines a bijection between and , allowing us to identify complex numbers as pairs of real numbers. This identification in turn gives rise to a visual representation of complex numbers as points in the Cartesian plane , called the complex plane in this context. To make clear that we are using to visualize , we label the horizontal and vertical axes as and .   Complex plane   Complex plane: points     Using our identification , we see that the real numbers are represented geometrically as the -axis of the complex plane. Similarly, the purely imaginary complex numbers are represented geometrically as the the -axis of the complex plane. As you will see, we will get a lot of mileage out of this geometric representation of complex numbers.    Fields  It turns out that complex addition and multiplication satisfy essentially all the same useful properties as real addition and multiplication: , both operations are commutative and associative, multiplication distributes over addition, . As a result, arithmetic and algebra in proceeds much as it does in , making a convenient number system to work with. But why stop at ? Are there other number systems we can build that allow us to do arithmetic and algebra in a familiar manner? Consider as an attempt to isolate precisely the properties we want a number system to satisfy in order for arithmetic and algebra to proceed essentially as it does in . A number system satisfying those properties is called a field , and the stipulated properties are called the field axioms .   Field   A field is a set together with two operations called addition and multiplication respectively, satisfying the following axioms.   Commutativity  For all we have .    Associativity  For all we have .    Distributivity  For all we have .    Additive identity  There is an element satisfying for all . The element is called the additive identity .    Additive inverse  For all there is an element satisfying . The element is called the additive inverse of .    Multiplicative identity  There is an element satisfying for all . The element is called the multiplicative identity .    Multiplicative inverse  For all nonzero elements (i.e., ) there is an element satisfying . The element , also denoted , is called the multiplicative inverse of .        Arithmetic and existential axioms  We will call Axioms (i)-(iii) the arithmetic axioms , as they stipulate that our operations satisfy some familiar properties from arithmetic. Additionally, we will call Axioms (iv)-(vii) the existential axioms as they posit the existence of certain special elements inside the underlying set of the field: namely, special elements denoted and satisfying Axioms (iv) and (vi), for each element a special associated element satisfying Axiom (v), and for each nonzero element a special associated element satisfying Axiom (vii).    Names and prejudices  We use familiar looking notation to describe the special elements of a field ( , ), but keep in mind that these are just names for certain special elements satisfying various axioms in .  When verifying whether a given set with given operations and is a field, we make no assumptions beforehand as to which elements of serve as these special elements. It is up to us to identify these special elements and verify that they satisfy the relevant axioms. As such, it is important each time we are confronted with a new potential field, that we come with no prejudices as to which elements serve as additive\/multiplicate identities\/inverses; these roles depend on how the operations themselves are defined. is a nice illustration of this approach.    Real numbers   The set of all real numbers, together with the operations of real number addition and real number multiplication, constitutes a field.     is a field   The set of all complex numbers, together with the operations of complex addition and multiplication defined in , constitutes a field.  In more detail, with respect to these operations, the additive and multiplicative identities are and , respectively, and given any , we have .    This is left as a homework exercise.     Rational numbers   Let be the set of all rational numbers: , .   Show that the restriction of real number addition and multiplication to gives rise to operations .    Explain why , together with these restricted operations, constitutes a field.          It is clear that we can add and multiply two rational numbers; what we need to show is that the result of applying either of these operations to two rational numbers is again a rational number. In other words, we must show that the sum of two rational numbers is a rational number, and the product of two rational numbers is a rational number. To this end, let , and write and , where . We then have . Since , we see that , as desired.    Once we know that real number addition and multiplication restrict to well-defined operations on , that these restricted operations satisfy the field axioms follows directly from the fact that the original operations on satisfy these axioms. For example, since addition and multiplication are satisfy Axiom (i) for all real numbers , they certainly satisfy Axiom (i) for all rational numbers .  Similarly, the existential Axioms (iv)-(vii) are easily seen to be satisfied for the operations restricted to once we observe that , and that given any nonzero , we have .        Integers   Let be the set of all integers.   Show that the restriction of real number addition and multiplication to gives rise to operations .    Explain why , together with these restricted operations, does not constitute a field.          An argument very similar to the one in shows that the sum and product of two integers is again an integer, and hence that restricting these operations to yields a well-defined operation on .    The integers fail to be a field with respect to these operations as Axiom (vii) fails. To this end, by way of counterexample, we claim that the integer does not have a multiplicative inverse in . Indeed, if there were an integer such that , then we'd have and . But for all nonzero integers , we have , and hence , a contradiction. We conclude that there is no integer satisfying , and hence that has no multiplicative inverse in . Thus is not a field with respect to these operations.  As it turns out, Axiom (vii) is the only field axiom that fails, making it still a pretty darn good number system to work with. In fact, we have a name for number systems that satisfy at least Axioms (i)-(vi) of the field axioms: they are called rings .        Field of two elements   Let be a set containing two distinct elements. Define addition and multiplication on as follows: . Verify that , together with these two operations, constitutes a field. Make explicit which elements of serve as the additive\/multiplicative identities\/inverses.    Since only has two elements, showing that Axioms (i)-(iii) hold is a simple matter of looking at all the possible cases: in other words, we can resort to a proof by exhaustion for these axioms. For example, verifying commutativity of multiplication requires looking at just 4 different cases. Furthermore, since it is trivially true that and , we need only look at the mixed products  and ; and in this case we see by the definition that . Similar arguments can be mounted for the rest of these arithmetic axioms.  We now turn to the existential axioms. First, we claim that serves as the additive identity in this case: , we have for this field. To verify this, we need to show that satisfies the defining axiom of the additive identity: namely, that for any . But this follows directly from the very definition of addition on , as we declared that and . A similar argument shows that the element acts as the multiplicative identity in this field: , we have .  Lastly we must show that each element of has an additive inverse satisfying Axiom (v), and that each nonzero element of has a multiplicative inverse satisfying Axiom (vii). Again, this is accomplished simply by inspection, building on our already established result that and . In detail, since and , we see that and . Turning at last to multiplicative inverses, note first that is the only nonzero element of (since ). Furthermore, since , we see that .  Since the operations on satisfy the field axioms, we conclude that is a field with respect to these operations. Having identified and , we can summarize the arithemetic rules of this particular field as follows: .    Take a moment to take in the exotic nature of the field in . Unlike , , and , its underlying set is finite! Further peculiar attributes of this field is that every element is its own additive inverse. Crazy! Clearly, this example is important enough to warrant its own name.   Field of two elements   The set , together with the operations , is called the field of two elements .     Finite fields  It turns out that any finite field ( , a field with finitely many elements) has prime cardinality. In other words if is finite and we can define operations on satisfying the field axioms, then , where is a prime integer.  Furthermore, given any prime integer , we can define addition and multiplication operations on the set that satisfy the field axioms. In other words, for every prime there is a field of elements. (These are things you learn in the Math 330\/331 sequences.)    Subtraction, division, integer powers   Let be a field.   Subtraction  Given elements , we define their difference  as .    Division  Given elements with , we define their quotient  as .    Integer powers  Given any , we define and where is any positive integer.  Furthermore, if and , we define .        Complex arithmetic   Let , . Compute the following complex numbers. Your answer must be expressed in the form , where .                   Using the formula for multiplicative inverses in , we have .    First observe that by definition we have . Using our computation in (1), we then conclude that .        Properties of fields   Let be a field, let , and let .    .    If , then or .     .     .     .     (assuming ).     (assuming ).       Very much in the spirit of , when proving a result like this for an arbitrary field, we can make no assumptions about beyond the fact that its addition and multiplication operations satisfy the field axioms. This can make the proof of these very simple properties less straightforward than you might expect. We content ourselves with a proof of (1) and (2).  To prove (1), we observe first that for any we have . Here we have used the fact that satisfies Axiom (iv) (and thus ), and that Axiom (iii) holds (distributivity). We conclude the proof by invoking the existence of additive inverses: in detail we have , as desired.  Moving to (2), assume we have . We will show that if , then , which is equivalent to proving or . Assume . By Axiom (vii) there is a multiplicative inverse satisfying . But then we have , as desired.      Further complex operations  Two further complex operations, the modulus and complex conjugation , will prove to be invaluable when doing complex arithmetic.   Complex modulus   The modulus (or absolute value ) of a complex number , denoted , is defined as . If , we say that has unit length .     Complex conjugation   Given the complex number , its (complex) conjugate  is defined as .     Conjugation properties   Let and be complex numbers.    .     .     .     .     and .     if and only if .         If , then .       This is left as a homework exercise.     "
},
{
  "id": "d_complex_numbers",
  "level": "2",
  "url": "s_fields.html#d_complex_numbers",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Complex numbers, real and imaginary parts.",
  "body": " Complex numbers, real and imaginary parts   The complex numbers is the set of all formal expressions of the form , where : , . Given a complex number , we call its real part , denoted , and we call its imaginary part , denoted : , we have .   "
},
{
  "id": "ss_complex-4",
  "level": "2",
  "url": "s_fields.html#ss_complex-4",
  "type": "Convention",
  "number": "1.1.2",
  "title": "Complex numbers.",
  "body": " Complex numbers  When introducing a complex number as , unless specified otherwise, it is assumed that .  "
},
{
  "id": "d_complex_equality",
  "level": "2",
  "url": "s_fields.html#d_complex_equality",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Complex equality.",
  "body": " Complex equality   Complex numbers and are equal , denoted , if . In other words, we have .   "
},
{
  "id": "d_real_imaginary",
  "level": "2",
  "url": "s_fields.html#d_real_imaginary",
  "type": "Definition",
  "number": "1.1.4",
  "title": "Real and imaginary numbers.",
  "body": " Real and imaginary numbers   Let be a complex number. We say that is real if , and (purely) imaginary if . Henceforth we identify the real numbers with the real complex numbers: , we declare that . Furthermore we will use the following abbreviations for various real and purely imaginary complex numbers: .   "
},
{
  "id": "d_sum_product",
  "level": "2",
  "url": "s_fields.html#d_sum_product",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Complex addition and multiplication.",
  "body": " Complex addition and multiplication   Let and be complex numbers.   Complex addition  We define the sum of and , denoted , as .    Complex multiplication  We define the product of and , denoted (or sometimes ) as .      "
},
{
  "id": "eg_arithmetic",
  "level": "2",
  "url": "s_fields.html#eg_arithmetic",
  "type": "Example",
  "number": "1.1.6",
  "title": "Complex arithmetic.",
  "body": " Complex arithmetic   Let , . Compute the following complex numbers. Your answer must be expressed in the form , where .                   We have .    We have .      "
},
{
  "id": "eg_squareroot_minusone",
  "level": "2",
  "url": "s_fields.html#eg_squareroot_minusone",
  "type": "Example",
  "number": "1.1.7",
  "title": "<span class=\"process-math\">\\(i^2\\)<\/span>.",
  "body": "   Compute .    We have, using the definition of multiplication, . Thus the element is seen to be a square-root of ! With a little more work, we can show that any complex number has a complex square-root. More on that later.   "
},
{
  "id": "rem_complex_arith",
  "level": "2",
  "url": "s_fields.html#rem_complex_arith",
  "type": "Remark",
  "number": "1.1.8",
  "title": "Complex arithmetic as extension of real arithmetic.",
  "body": " Complex arithmetic as extension of real arithmetic  Using the definition of complex multiplication, it is easy to see that given any real complex number , we have . In particular, given any two real complex numbers and , we have . In other words, when we restrict complex multiplication to the real complex numbers, we recover our familiar real multiplication operation. A similar statement applies for complex addition and real addition. In this sense, complex arithmetic is understood as an extension of real arithmetic.  "
},
{
  "id": "ss_complex-13",
  "level": "2",
  "url": "s_fields.html#ss_complex-13",
  "type": "Convention",
  "number": "1.1.9",
  "title": "<span class=\"process-math\">\\(a+ib=a+bi\\)<\/span>.",
  "body": "  As you will show yourself in homework, complex multiplication is commutative ( , we have for all ). As a result, we are free to write a complex number as . Oftentimes one of these expressions simply looks better typographically than the other.  Note that when writing and , where , it is still the case that if and only if and .  "
},
{
  "id": "ss_complex-14",
  "level": "2",
  "url": "s_fields.html#ss_complex-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex plane "
},
{
  "id": "fig_complex_plane",
  "level": "2",
  "url": "s_fields.html#fig_complex_plane",
  "type": "Figure",
  "number": "1.1.10",
  "title": "",
  "body": " Complex plane   Complex plane: points    "
},
{
  "id": "d_field",
  "level": "2",
  "url": "s_fields.html#d_field",
  "type": "Definition",
  "number": "1.1.11",
  "title": "Field.",
  "body": " Field   A field is a set together with two operations called addition and multiplication respectively, satisfying the following axioms.   Commutativity  For all we have .    Associativity  For all we have .    Distributivity  For all we have .    Additive identity  There is an element satisfying for all . The element is called the additive identity .    Additive inverse  For all there is an element satisfying . The element is called the additive inverse of .    Multiplicative identity  There is an element satisfying for all . The element is called the multiplicative identity .    Multiplicative inverse  For all nonzero elements (i.e., ) there is an element satisfying . The element , also denoted , is called the multiplicative inverse of .      "
},
{
  "id": "ss_field_def-4",
  "level": "2",
  "url": "s_fields.html#ss_field_def-4",
  "type": "Remark",
  "number": "1.1.12",
  "title": "Arithmetic and existential axioms.",
  "body": " Arithmetic and existential axioms  We will call Axioms (i)-(iii) the arithmetic axioms , as they stipulate that our operations satisfy some familiar properties from arithmetic. Additionally, we will call Axioms (iv)-(vii) the existential axioms as they posit the existence of certain special elements inside the underlying set of the field: namely, special elements denoted and satisfying Axioms (iv) and (vi), for each element a special associated element satisfying Axiom (v), and for each nonzero element a special associated element satisfying Axiom (vii).  "
},
{
  "id": "warning_names_fields",
  "level": "2",
  "url": "s_fields.html#warning_names_fields",
  "type": "Warning",
  "number": "1.1.13",
  "title": "Names and prejudices.",
  "body": " Names and prejudices  We use familiar looking notation to describe the special elements of a field ( , ), but keep in mind that these are just names for certain special elements satisfying various axioms in .  When verifying whether a given set with given operations and is a field, we make no assumptions beforehand as to which elements of serve as these special elements. It is up to us to identify these special elements and verify that they satisfy the relevant axioms. As such, it is important each time we are confronted with a new potential field, that we come with no prejudices as to which elements serve as additive\/multiplicate identities\/inverses; these roles depend on how the operations themselves are defined. is a nice illustration of this approach.  "
},
{
  "id": "eg_R",
  "level": "2",
  "url": "s_fields.html#eg_R",
  "type": "Example",
  "number": "1.1.14",
  "title": "Real numbers.",
  "body": " Real numbers   The set of all real numbers, together with the operations of real number addition and real number multiplication, constitutes a field.   "
},
{
  "id": "th_complex_field",
  "level": "2",
  "url": "s_fields.html#th_complex_field",
  "type": "Theorem",
  "number": "1.1.15",
  "title": "<span class=\"process-math\">\\(\\C\\)<\/span> is a field.",
  "body": " is a field   The set of all complex numbers, together with the operations of complex addition and multiplication defined in , constitutes a field.  In more detail, with respect to these operations, the additive and multiplicative identities are and , respectively, and given any , we have .    This is left as a homework exercise.   "
},
{
  "id": "eg_Q",
  "level": "2",
  "url": "s_fields.html#eg_Q",
  "type": "Example",
  "number": "1.1.16",
  "title": "Rational numbers.",
  "body": " Rational numbers   Let be the set of all rational numbers: , .   Show that the restriction of real number addition and multiplication to gives rise to operations .    Explain why , together with these restricted operations, constitutes a field.          It is clear that we can add and multiply two rational numbers; what we need to show is that the result of applying either of these operations to two rational numbers is again a rational number. In other words, we must show that the sum of two rational numbers is a rational number, and the product of two rational numbers is a rational number. To this end, let , and write and , where . We then have . Since , we see that , as desired.    Once we know that real number addition and multiplication restrict to well-defined operations on , that these restricted operations satisfy the field axioms follows directly from the fact that the original operations on satisfy these axioms. For example, since addition and multiplication are satisfy Axiom (i) for all real numbers , they certainly satisfy Axiom (i) for all rational numbers .  Similarly, the existential Axioms (iv)-(vii) are easily seen to be satisfied for the operations restricted to once we observe that , and that given any nonzero , we have .      "
},
{
  "id": "eg_integers",
  "level": "2",
  "url": "s_fields.html#eg_integers",
  "type": "Example",
  "number": "1.1.17",
  "title": "Integers.",
  "body": " Integers   Let be the set of all integers.   Show that the restriction of real number addition and multiplication to gives rise to operations .    Explain why , together with these restricted operations, does not constitute a field.          An argument very similar to the one in shows that the sum and product of two integers is again an integer, and hence that restricting these operations to yields a well-defined operation on .    The integers fail to be a field with respect to these operations as Axiom (vii) fails. To this end, by way of counterexample, we claim that the integer does not have a multiplicative inverse in . Indeed, if there were an integer such that , then we'd have and . But for all nonzero integers , we have , and hence , a contradiction. We conclude that there is no integer satisfying , and hence that has no multiplicative inverse in . Thus is not a field with respect to these operations.  As it turns out, Axiom (vii) is the only field axiom that fails, making it still a pretty darn good number system to work with. In fact, we have a name for number systems that satisfy at least Axioms (i)-(vi) of the field axioms: they are called rings .      "
},
{
  "id": "eg_F2",
  "level": "2",
  "url": "s_fields.html#eg_F2",
  "type": "Example",
  "number": "1.1.18",
  "title": "Field of two elements.",
  "body": " Field of two elements   Let be a set containing two distinct elements. Define addition and multiplication on as follows: . Verify that , together with these two operations, constitutes a field. Make explicit which elements of serve as the additive\/multiplicative identities\/inverses.    Since only has two elements, showing that Axioms (i)-(iii) hold is a simple matter of looking at all the possible cases: in other words, we can resort to a proof by exhaustion for these axioms. For example, verifying commutativity of multiplication requires looking at just 4 different cases. Furthermore, since it is trivially true that and , we need only look at the mixed products  and ; and in this case we see by the definition that . Similar arguments can be mounted for the rest of these arithmetic axioms.  We now turn to the existential axioms. First, we claim that serves as the additive identity in this case: , we have for this field. To verify this, we need to show that satisfies the defining axiom of the additive identity: namely, that for any . But this follows directly from the very definition of addition on , as we declared that and . A similar argument shows that the element acts as the multiplicative identity in this field: , we have .  Lastly we must show that each element of has an additive inverse satisfying Axiom (v), and that each nonzero element of has a multiplicative inverse satisfying Axiom (vii). Again, this is accomplished simply by inspection, building on our already established result that and . In detail, since and , we see that and . Turning at last to multiplicative inverses, note first that is the only nonzero element of (since ). Furthermore, since , we see that .  Since the operations on satisfy the field axioms, we conclude that is a field with respect to these operations. Having identified and , we can summarize the arithemetic rules of this particular field as follows: .   "
},
{
  "id": "d_F2",
  "level": "2",
  "url": "s_fields.html#d_F2",
  "type": "Definition",
  "number": "1.1.19",
  "title": "Field of two elements.",
  "body": " Field of two elements   The set , together with the operations , is called the field of two elements .   "
},
{
  "id": "ss_field_def-13",
  "level": "2",
  "url": "s_fields.html#ss_field_def-13",
  "type": "Remark",
  "number": "1.1.20",
  "title": "Finite fields.",
  "body": " Finite fields  It turns out that any finite field ( , a field with finitely many elements) has prime cardinality. In other words if is finite and we can define operations on satisfying the field axioms, then , where is a prime integer.  Furthermore, given any prime integer , we can define addition and multiplication operations on the set that satisfy the field axioms. In other words, for every prime there is a field of elements. (These are things you learn in the Math 330\/331 sequences.)  "
},
{
  "id": "d_field_subt_quot",
  "level": "2",
  "url": "s_fields.html#d_field_subt_quot",
  "type": "Definition",
  "number": "1.1.21",
  "title": "Subtraction, division, integer powers.",
  "body": " Subtraction, division, integer powers   Let be a field.   Subtraction  Given elements , we define their difference  as .    Division  Given elements with , we define their quotient  as .    Integer powers  Given any , we define and where is any positive integer.  Furthermore, if and , we define .      "
},
{
  "id": "eg_arithmetic_II",
  "level": "2",
  "url": "s_fields.html#eg_arithmetic_II",
  "type": "Example",
  "number": "1.1.22",
  "title": "Complex arithmetic.",
  "body": " Complex arithmetic   Let , . Compute the following complex numbers. Your answer must be expressed in the form , where .                   Using the formula for multiplicative inverses in , we have .    First observe that by definition we have . Using our computation in (1), we then conclude that .      "
},
{
  "id": "th_field_props",
  "level": "2",
  "url": "s_fields.html#th_field_props",
  "type": "Theorem",
  "number": "1.1.23",
  "title": "Properties of fields.",
  "body": " Properties of fields   Let be a field, let , and let .    .    If , then or .     .     .     .     (assuming ).     (assuming ).       Very much in the spirit of , when proving a result like this for an arbitrary field, we can make no assumptions about beyond the fact that its addition and multiplication operations satisfy the field axioms. This can make the proof of these very simple properties less straightforward than you might expect. We content ourselves with a proof of (1) and (2).  To prove (1), we observe first that for any we have . Here we have used the fact that satisfies Axiom (iv) (and thus ), and that Axiom (iii) holds (distributivity). We conclude the proof by invoking the existence of additive inverses: in detail we have , as desired.  Moving to (2), assume we have . We will show that if , then , which is equivalent to proving or . Assume . By Axiom (vii) there is a multiplicative inverse satisfying . But then we have , as desired.   "
},
{
  "id": "d_modulus",
  "level": "2",
  "url": "s_fields.html#d_modulus",
  "type": "Definition",
  "number": "1.1.24",
  "title": "Complex modulus.",
  "body": " Complex modulus   The modulus (or absolute value ) of a complex number , denoted , is defined as . If , we say that has unit length .   "
},
{
  "id": "d_conj",
  "level": "2",
  "url": "s_fields.html#d_conj",
  "type": "Definition",
  "number": "1.1.25",
  "title": "Complex conjugation.",
  "body": " Complex conjugation   Given the complex number , its (complex) conjugate  is defined as .   "
},
{
  "id": "th_conj",
  "level": "2",
  "url": "s_fields.html#th_conj",
  "type": "Theorem",
  "number": "1.1.26",
  "title": "Conjugation properties.",
  "body": " Conjugation properties   Let and be complex numbers.    .     .     .     .     and .     if and only if .         If , then .       This is left as a homework exercise.   "
},
{
  "id": "s_vector_space",
  "level": "1",
  "url": "s_vector_space.html",
  "type": "Section",
  "number": "1.2",
  "title": "Vector spaces",
  "body": " Vector spaces  In the last section we isolated useful number system properties of and generalized them in the form of our axiomatic definition of a field ( ). Similarly, in this section we give a similar treatment to the type of vector spaces usually studied in a first course in linear algebra: that is, the space of real -tuples . The two operations on we choose to generalize are its version of vector addition  , and its version of scalar multiplication  . You should think of the axioms of as an enumeration of precisely which properties of these two operations on we want a structure to enjoy in order to ensure that we can perform a form of vector arithmetic and algebra just as we do in . Note that there is an important qualitative difference between the two vector operations on that is treated carefully in ; namely, whereas vector addition takes as its input two vectors and returns another, scalar multiplication takes a scalar and a vector and returns another vector. In this sense, scalar multiplication should be thought of as a sort of hybrid operation.   stands for field   Henceforth, unless stated otherwise, will always denote a field. For any explicit example in this course the field will be either or . However, all statements of theory formulated in terms of are understood to be valid for any field.     Vector space  vector space definition  vector space zero vector  vector space vector inverse  vector space vector   Let be a field. A vector space over (or -vector space ) is a set together with two operations , called respectively vector addition and scalar multiplication , that satisfy the following vector space axioms .   Vector addition is commutative   for all .    Vector addition is associative   for all .    Zero vector  There is an element such that for all , we have . We call the zero vector of .    Vector inverses  For all , there is another element satisfying . We call the vector inverse of .    Distribution over vector addition   for all and .    Distribution over scalar addition   for all and .    Scalar multiplication is associative   for all and all .    Scalar multiplication identity   for all .   We call elements of the vector space  vectors and the elements of  scalars .     Arithmetic and existential axioms  As with the axioms in we divide the vector space axioms into the arithmetic axioms (Axioms (i)-(ii),(v)-(vi),(vii)) and the existential axioms (Axioms (iii)-(iv)).   We now proceed to a litany of examples. Each one will be stated as a definition (for reference purposes), but nonetheless requires a proof that the given structure does indeed constitute a vector space. In a classic mathematical move, we begin with the simplest of all vector spaces, the zero space . Elementary as this example is, it serves well to illustrate the axiomatic nature of .   Zero space   Let be a field, and let , a set containing exactly one element. There is a unique -vector space structure that can be given to , defined as follows.   Vector operations  Vector addition on is defined as ; scalar multiplication on is defined as for all .    Zero vector  The zero vector of is : , .    Vector inverses  The vector inverse of is : , .   Since with respect to this vector space structure, we have . Accordingly, we call a zero space .     makes two claims: that the given operations make into a vector space, and that this is the only way to make into a vector space. As with all claims in mathematics, these need to be proved, but as you will see, the proof is a very light affair.   Proof for  Since only has one item, there is no choice for what vector addition and scalar multiplication can be. They must be defined in the manner given in . Similarly, we must have and , as once again, is the only element of ! This shows that there can be at most one way of giving a vector space structure.  It is now easy to see that these choices do indeed satisfy the vector space axioms. That satisfies the identity of Axiom defining the zero vector follows from the fact that for all we have (since ), and thus . Thus is the zero vector of the space.  Similarly, to show all elements of have vector inverses amounts to showing that has a vector inverse, since this is the only element of . It is claimed that ( , is its own vector inverse), which follows from the fact that . Lastly, the identities of Axioms (i)-(ii) and (v)-(viii) in this setting all reduce to trivial statements of the form . Consider Axiom (vii), for example. For all , we have , in which case and . Thus for all and .  We leave verification of the rest of the axioms to the reader.   It is worth formalizing the proof technique used above into an official procedure for showing whether something is a vector space.   Vector space verification   To decide whether a given set and operations is a vector space, proceed as follows.   Make explicit the underlying set of the proposed vector space.    Make explicit what the scalar multiplication and vector addition operations are.    Identify an element of that serves as the zero vector ( , satisfies ) and for each show that there is a vector satisfying .    Show that the two vector operations and our choice of zero vector and vector inverses satisfy the axioms of .        Vector space verification  Think of steps (1)-(3) of as the issuing of official declarations about the makeup of our proposed vector space: The underlying set shall be as stated ; We declare the vector operations thusly ; The zero vector shall be this element here, and vector inverses shall be assigned in this manner . Step (4) is where we get down to the nitty gritty of showing that the proposed vector space structure articulated in (1)-(3) does indeed satisfy all the necessary properties.  In each of the remaining examples below we carefully lay out the details of items (1)-(3) while often leaving much of the work of item (4) to you. You will meet these vector spaces frequently throughout the rest of your life. Each time you do, it will be helpful for orientation purposes to mentally run through items (1)-(3). Ask yourself: What is the underlying set? What are vector operations? What acts as the zero vector, and how do I assign vector inverses?   We now work our way up in complexity, considering first three examples that might already be familiar to you in some form or other. Note that (a) the vector space operations for each of , , are all very similar in nature (roughly speaking the operations are always defined component-wise ), and (b) that we postpone the verification of the vector space axioms for these examples until in the next section! This is because each of the vector spaces in is in fact one particular example of the vastly more general vector space defined in ! We will make this clear in the proof of . For now, consider the treatment of the vector spaces below simply as a getting to know session.   -tuples   Let be a field. Given a positive integer , recall that is the set of all -valued -tuples: , . Below we define a vector space structure on .   Vector operations  Given and , we define .    Zero vector  The zero vector of is .    Vector inverses  Given a sequence , its vector inverse is .   We call , together with these vector operations, the space of -valued -tuples (or the space of -tuples with coordinates in ).     The proof that is a vector space with respect to these operations is postponed until .    Complex pairs   Consider the complex vector space . Given vectors and scalar , we have .     Space of infinite sequences   Let be a field. Recall that is the set of all -valued infinite sequences: , . Below we define a vector space structure on .   Vector operations  Given and , we define .    Zero vector  The zero vector of with respect to these operations is .    Vector inverses  Given a sequence , its vector inverse is .   We call , together with these vector operations, the space of infinite sequences with entries in (or the space of -valued infinite sequences ).     The proof that is a vector space with respect to these operations is postponed until .    Complex infinite sequences   Consider the complex vector space of all infinite sequences with complex entries. Given sequences and , and scalar , we have .     Space of matrices   Let be a field. Given positive integers , we define to be the set of all matrices with entries in : , . Below we define a vector space structure on .   Vector operations  Given matrices and , we define .    Zero vector  The zero vector of is the the zero matrix .    Vector inverses  Given a matrix its vector inverse is .   We call , together with these vector operations, the space of matrices with entries in (or the space of -valued matrices ).     The proof that is a vector space with respect to these operations is postponed until .    Complex matrices   Consider the vector space of all matrices with complex entries. Given matrices and scalar , we have .    "
},
{
  "id": "fiat_F_field",
  "level": "2",
  "url": "s_vector_space.html#fiat_F_field",
  "type": "Fiat",
  "number": "1.2.1",
  "title": "<span class=\"process-math\">\\(F\\)<\/span> stands for field.",
  "body": " stands for field   Henceforth, unless stated otherwise, will always denote a field. For any explicit example in this course the field will be either or . However, all statements of theory formulated in terms of are understood to be valid for any field.   "
},
{
  "id": "d_vector_space",
  "level": "2",
  "url": "s_vector_space.html#d_vector_space",
  "type": "Definition",
  "number": "1.2.2",
  "title": "Vector space.",
  "body": " Vector space  vector space definition  vector space zero vector  vector space vector inverse  vector space vector   Let be a field. A vector space over (or -vector space ) is a set together with two operations , called respectively vector addition and scalar multiplication , that satisfy the following vector space axioms .   Vector addition is commutative   for all .    Vector addition is associative   for all .    Zero vector  There is an element such that for all , we have . We call the zero vector of .    Vector inverses  For all , there is another element satisfying . We call the vector inverse of .    Distribution over vector addition   for all and .    Distribution over scalar addition   for all and .    Scalar multiplication is associative   for all and all .    Scalar multiplication identity   for all .   We call elements of the vector space  vectors and the elements of  scalars .   "
},
{
  "id": "s_vector_space-5",
  "level": "2",
  "url": "s_vector_space.html#s_vector_space-5",
  "type": "Remark",
  "number": "1.2.3",
  "title": "Arithmetic and existential axioms.",
  "body": " Arithmetic and existential axioms  As with the axioms in we divide the vector space axioms into the arithmetic axioms (Axioms (i)-(ii),(v)-(vi),(vii)) and the existential axioms (Axioms (iii)-(iv)).  "
},
{
  "id": "d_zero_space",
  "level": "2",
  "url": "s_vector_space.html#d_zero_space",
  "type": "Definition",
  "number": "1.2.4",
  "title": "Zero space.",
  "body": " Zero space   Let be a field, and let , a set containing exactly one element. There is a unique -vector space structure that can be given to , defined as follows.   Vector operations  Vector addition on is defined as ; scalar multiplication on is defined as for all .    Zero vector  The zero vector of is : , .    Vector inverses  The vector inverse of is : , .   Since with respect to this vector space structure, we have . Accordingly, we call a zero space .   "
},
{
  "id": "s_vector_space-9",
  "level": "2",
  "url": "s_vector_space.html#s_vector_space-9",
  "type": "Proof",
  "number": "1.2.1",
  "title": "Proof for Definition 1.2.4.",
  "body": " Proof for  Since only has one item, there is no choice for what vector addition and scalar multiplication can be. They must be defined in the manner given in . Similarly, we must have and , as once again, is the only element of ! This shows that there can be at most one way of giving a vector space structure.  It is now easy to see that these choices do indeed satisfy the vector space axioms. That satisfies the identity of Axiom defining the zero vector follows from the fact that for all we have (since ), and thus . Thus is the zero vector of the space.  Similarly, to show all elements of have vector inverses amounts to showing that has a vector inverse, since this is the only element of . It is claimed that ( , is its own vector inverse), which follows from the fact that . Lastly, the identities of Axioms (i)-(ii) and (v)-(viii) in this setting all reduce to trivial statements of the form . Consider Axiom (vii), for example. For all , we have , in which case and . Thus for all and .  We leave verification of the rest of the axioms to the reader.  "
},
{
  "id": "proc_vector_space",
  "level": "2",
  "url": "s_vector_space.html#proc_vector_space",
  "type": "Procedure",
  "number": "1.2.5",
  "title": "Vector space verification.",
  "body": " Vector space verification   To decide whether a given set and operations is a vector space, proceed as follows.   Make explicit the underlying set of the proposed vector space.    Make explicit what the scalar multiplication and vector addition operations are.    Identify an element of that serves as the zero vector ( , satisfies ) and for each show that there is a vector satisfying .    Show that the two vector operations and our choice of zero vector and vector inverses satisfy the axioms of .      "
},
{
  "id": "s_vector_space-12",
  "level": "2",
  "url": "s_vector_space.html#s_vector_space-12",
  "type": "Remark",
  "number": "1.2.6",
  "title": "Vector space verification.",
  "body": " Vector space verification  Think of steps (1)-(3) of as the issuing of official declarations about the makeup of our proposed vector space: The underlying set shall be as stated ; We declare the vector operations thusly ; The zero vector shall be this element here, and vector inverses shall be assigned in this manner . Step (4) is where we get down to the nitty gritty of showing that the proposed vector space structure articulated in (1)-(3) does indeed satisfy all the necessary properties.  In each of the remaining examples below we carefully lay out the details of items (1)-(3) while often leaving much of the work of item (4) to you. You will meet these vector spaces frequently throughout the rest of your life. Each time you do, it will be helpful for orientation purposes to mentally run through items (1)-(3). Ask yourself: What is the underlying set? What are vector operations? What acts as the zero vector, and how do I assign vector inverses?  "
},
{
  "id": "d_ntuples",
  "level": "2",
  "url": "s_vector_space.html#d_ntuples",
  "type": "Definition",
  "number": "1.2.7",
  "title": "<span class=\"process-math\">\\(n\\)<\/span>-tuples.",
  "body": " -tuples   Let be a field. Given a positive integer , recall that is the set of all -valued -tuples: , . Below we define a vector space structure on .   Vector operations  Given and , we define .    Zero vector  The zero vector of is .    Vector inverses  Given a sequence , its vector inverse is .   We call , together with these vector operations, the space of -valued -tuples (or the space of -tuples with coordinates in ).   "
},
{
  "id": "s_vector_space-15",
  "level": "2",
  "url": "s_vector_space.html#s_vector_space-15",
  "type": "Proof",
  "number": "1.2.2",
  "title": "",
  "body": " The proof that is a vector space with respect to these operations is postponed until .  "
},
{
  "id": "eg_complex_pairs",
  "level": "2",
  "url": "s_vector_space.html#eg_complex_pairs",
  "type": "Example",
  "number": "1.2.8",
  "title": "Complex pairs.",
  "body": " Complex pairs   Consider the complex vector space . Given vectors and scalar , we have .   "
},
{
  "id": "d_infinite_sequences_space",
  "level": "2",
  "url": "s_vector_space.html#d_infinite_sequences_space",
  "type": "Definition",
  "number": "1.2.9",
  "title": "Space of infinite sequences.",
  "body": " Space of infinite sequences   Let be a field. Recall that is the set of all -valued infinite sequences: , . Below we define a vector space structure on .   Vector operations  Given and , we define .    Zero vector  The zero vector of with respect to these operations is .    Vector inverses  Given a sequence , its vector inverse is .   We call , together with these vector operations, the space of infinite sequences with entries in (or the space of -valued infinite sequences ).   "
},
{
  "id": "s_vector_space-18",
  "level": "2",
  "url": "s_vector_space.html#s_vector_space-18",
  "type": "Proof",
  "number": "1.2.3",
  "title": "",
  "body": " The proof that is a vector space with respect to these operations is postponed until .  "
},
{
  "id": "eg_complex_seqs",
  "level": "2",
  "url": "s_vector_space.html#eg_complex_seqs",
  "type": "Example",
  "number": "1.2.10",
  "title": "Complex infinite sequences.",
  "body": " Complex infinite sequences   Consider the complex vector space of all infinite sequences with complex entries. Given sequences and , and scalar , we have .   "
},
{
  "id": "d_matrix_space",
  "level": "2",
  "url": "s_vector_space.html#d_matrix_space",
  "type": "Definition",
  "number": "1.2.11",
  "title": "Space of matrices.",
  "body": " Space of matrices   Let be a field. Given positive integers , we define to be the set of all matrices with entries in : , . Below we define a vector space structure on .   Vector operations  Given matrices and , we define .    Zero vector  The zero vector of is the the zero matrix .    Vector inverses  Given a matrix its vector inverse is .   We call , together with these vector operations, the space of matrices with entries in (or the space of -valued matrices ).   "
},
{
  "id": "s_vector_space-21",
  "level": "2",
  "url": "s_vector_space.html#s_vector_space-21",
  "type": "Proof",
  "number": "1.2.4",
  "title": "",
  "body": " The proof that is a vector space with respect to these operations is postponed until .  "
},
{
  "id": "eg_complex_matrices",
  "level": "2",
  "url": "s_vector_space.html#eg_complex_matrices",
  "type": "Example",
  "number": "1.2.12",
  "title": "Complex matrices.",
  "body": " Complex matrices   Consider the vector space of all matrices with complex entries. Given matrices and scalar , we have .   "
},
{
  "id": "s_vector_space_functions",
  "level": "1",
  "url": "s_vector_space_functions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Vector spaces (cont.)",
  "body": " Vector spaces (cont.)   Function spaces  As promised, we now prove that sets , , , together with their indicated operations, do indeed satisfy the vector space axioms. We will do this in a somewhat indirect manner by first constructing a more general vector space , and then showing that , , and are just specific instances of this more general construction, corresponding to particular choices of the set .  The objects of the vector space defined in can be thought of either as functions from the set to the field , or equivalently, as -valued tuples indexed by . Hence the functions\/tuples in its name. Depending on the context, one of these two equivalent conceptions (function or tuple) may be more convenient than the other. For example, to make the connection between , , , and , it is most convenient to think in terms of tuples. See for the general definition of tuples and for an explication of the equivalence between functions and tuples.   Space of -valued functions\/tuples   Let be a field. Given any set , recall that is defined as the set of all functions :  . Equivalently, thinking of functions as tuples, we can describe as the set of all -valued tuples indexed by : , . Below we define a vector space structure on .   Vector operations  Given elements and scalar , we define . In other words, is the function defined as for all , and is the function defined as for all .    Zero vector  The zero vector of is the zero function defined as for all . In other words, using tuple notation, we have .    Vector inverses  Given an element its vector inverse is defined as . In other words is the function on defined as for all .   We call , together with these vector operations, the space of functions from to , or, thinking in terms of tuples, the space of -valued tuples indexed by .     Function\/tuple spaces are vector spaces   Each of the sets , , , , together with the accompanying vector operations defined above, is a vector space.    First we observe, thinking in terms of tuples, that each of the sets , , , along with their accompanying vector space operations, is a specific example of together with its vector operations. This is seen by choosing an appropriate index set in each case. In more detail, we have . Thus it suffices to show that is a vector space with respect to the given vector operations. To do this, we follow . Since has already taken care of steps (1)-(3) for us, it remains to show that the vector space axioms are satisfied. As you will see, the tuple notation for functions makes these proofs quite straightforward consequences of the field axioms satisfied by .  Consider the arithmetic axioms first. We will verify that Axioms (i), (ii), and (v) are satisfied. Given and , we have . Lastly we will show that does indeed satisfy the additive identity axiom (Axiom (iii)), leaving the verification of Axiom (iv) to the reader. Given any element , we have , as desired.     Real-valued functions   Let be an interval in the real line. Using the function interpretation of , is the set of all functions of the form . The vector operations defined in in this setting correspond to the function-arithmetic operations you met in precalculus and calculus: , given functions , their vector sum is the function defined as for all . Similarly, given a scalar and function , the vector scalar multiple is the function defined as for all .  In this context it is possible to visualize our vector operations in terms of the graphs of the functions on the interval .   Visualizing function arithmetic in    Visualizing   Visualizing function addition      Visualizing   Visualizing function scalar multiplication           Vector space properties  We end this section with a few elementary vector space properties. Since these statements involve a general vector space (as opposed to a specific type of vector space), we will make no assumptions about and the base field , other than that satisfies the vector space axioms and satisfies the field axioms.   Uniqueness of zero vector and inverses   Let be an -vector space.   The zero vector in is unique: , there is one and only one element of that satisfies .    Inverse vectors are unique: , for all there is one and only one vector satisfying .          If satisfies for all , then in particular, taking , we see that . But since (using the defining property of , we see that . We conclude that , as desired.    Let . Given we have .        Vector space properties   Let be an -vector space.   For all , we have .    For all , we have .    For all , we have .    For all and , if , then or .       We provide proofs of (1) and (3), leaving (2) and (4) to the reader.  Our proof of (1) is almost identical to a similar statement in . For any , we have . But then we have , as desired.  Let . To prove (2), we will show that satisfies the defining property of ; since each vector has a unique vector inverse ( ), it will then follow that . To show satisfies , we observe that . Thus .     "
},
{
  "id": "d_tuple_space",
  "level": "2",
  "url": "s_vector_space_functions.html#d_tuple_space",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Space of <span class=\"process-math\">\\(F\\)<\/span>-valued functions\/tuples.",
  "body": " Space of -valued functions\/tuples   Let be a field. Given any set , recall that is defined as the set of all functions :  . Equivalently, thinking of functions as tuples, we can describe as the set of all -valued tuples indexed by : , . Below we define a vector space structure on .   Vector operations  Given elements and scalar , we define . In other words, is the function defined as for all , and is the function defined as for all .    Zero vector  The zero vector of is the zero function defined as for all . In other words, using tuple notation, we have .    Vector inverses  Given an element its vector inverse is defined as . In other words is the function on defined as for all .   We call , together with these vector operations, the space of functions from to , or, thinking in terms of tuples, the space of -valued tuples indexed by .   "
},
{
  "id": "th_vs_egs",
  "level": "2",
  "url": "s_vector_space_functions.html#th_vs_egs",
  "type": "Theorem",
  "number": "1.3.2",
  "title": "Function\/tuple spaces are vector spaces.",
  "body": " Function\/tuple spaces are vector spaces   Each of the sets , , , , together with the accompanying vector operations defined above, is a vector space.    First we observe, thinking in terms of tuples, that each of the sets , , , along with their accompanying vector space operations, is a specific example of together with its vector operations. This is seen by choosing an appropriate index set in each case. In more detail, we have . Thus it suffices to show that is a vector space with respect to the given vector operations. To do this, we follow . Since has already taken care of steps (1)-(3) for us, it remains to show that the vector space axioms are satisfied. As you will see, the tuple notation for functions makes these proofs quite straightforward consequences of the field axioms satisfied by .  Consider the arithmetic axioms first. We will verify that Axioms (i), (ii), and (v) are satisfied. Given and , we have . Lastly we will show that does indeed satisfy the additive identity axiom (Axiom (iii)), leaving the verification of Axiom (iv) to the reader. Given any element , we have , as desired.   "
},
{
  "id": "eg_real_functions",
  "level": "2",
  "url": "s_vector_space_functions.html#eg_real_functions",
  "type": "Example",
  "number": "1.3.3",
  "title": "Real-valued functions.",
  "body": " Real-valued functions   Let be an interval in the real line. Using the function interpretation of , is the set of all functions of the form . The vector operations defined in in this setting correspond to the function-arithmetic operations you met in precalculus and calculus: , given functions , their vector sum is the function defined as for all . Similarly, given a scalar and function , the vector scalar multiple is the function defined as for all .  In this context it is possible to visualize our vector operations in terms of the graphs of the functions on the interval .   Visualizing function arithmetic in    Visualizing   Visualizing function addition      Visualizing   Visualizing function scalar multiplication        "
},
{
  "id": "th_zero_inv_unique",
  "level": "2",
  "url": "s_vector_space_functions.html#th_zero_inv_unique",
  "type": "Theorem",
  "number": "1.3.5",
  "title": "Uniqueness of zero vector and inverses.",
  "body": " Uniqueness of zero vector and inverses   Let be an -vector space.   The zero vector in is unique: , there is one and only one element of that satisfies .    Inverse vectors are unique: , for all there is one and only one vector satisfying .          If satisfies for all , then in particular, taking , we see that . But since (using the defining property of , we see that . We conclude that , as desired.    Let . Given we have .      "
},
{
  "id": "th_vs_props",
  "level": "2",
  "url": "s_vector_space_functions.html#th_vs_props",
  "type": "Theorem",
  "number": "1.3.6",
  "title": "Vector space properties.",
  "body": " Vector space properties   Let be an -vector space.   For all , we have .    For all , we have .    For all , we have .    For all and , if , then or .       We provide proofs of (1) and (3), leaving (2) and (4) to the reader.  Our proof of (1) is almost identical to a similar statement in . For any , we have . But then we have , as desired.  Let . To prove (2), we will show that satisfies the defining property of ; since each vector has a unique vector inverse ( ), it will then follow that . To show satisfies , we observe that . Thus .   "
},
{
  "id": "s_subspace",
  "level": "1",
  "url": "s_subspace.html",
  "type": "Section",
  "number": "1.4",
  "title": "Subspaces",
  "body": " Subspaces   In this section we will study subspaces , which are special subsets of vector spaces that respect the defining structure of a vector spaces: namely, the two vector operations. makes precise what we mean here by respect .  Subspaces arise naturally in any setting where vector spaces are at play, and are closely connected to solutions to linear systems. As we will see in , subspaces of vector spaces are vector spaces in their own right, furnishing us with yet more interesting examples of vector spaces.    Definition and examples   Subspace   Let be a vector space. A subset is a subspace of if the following conditions hold.   contains the zero vector   .    is closed under addition  For all , if , then . Using logical shorthand: .    is closed under scalar multiplication  For all and , if , then . Using logical shorthand: .        Trivial subspaces   Let be an -vector space. The following are subspaces of :            In other words, the set containing just the zero vector is a subspace of , as is itself. These are sometimes called the trivial subspaces of . Observe that every subspace lies between these two: , we have .    We prove that is a subspace of , leaving the proof for to the reader.   By definition, .    Since is the only element of and since , we see that is closed under addition.    Since is the only element of , we need only show that for all scalars . But we have by . Thus , as desired.   This proves is a subspace of .      Let and let . Prove that is a subspace.    We must show properties (i)-(iii) hold for .   The zero element of is , which is certainly of the form . Thus .    We must prove the implication . .    We must prove the implication , for any . We have          Let and let . Is a vector space? Decide which of the of properties (i)-(iii) in (if any) are satisfied by .       Clearly .    Suppose . Then , in which case , and hence . Thus is closed under addition.    The set is not closed under scalar multiplication. Indeed, let . Then .       As we now endeavor to show, if is a subspace of a vector space , then it inherits a vector space structure from by simply restricting the vector operations defined on to the subset .   Subspaces are vector spaces   Let be a subspace of the vector space .   The vector operations of restrict to operations on that satisfy the vector space axioms.    The zero vector of , considered as a vector space, is the zero vector of .    Given an element , its vector inverse with respect to the vector space structure of is equal to its vector inverse with respect to the vector space structure of .       It is important to understand how Axioms of come into play here. Without them we would not be able to say that restricting the vector operations of to elements of actually gives rise to well-defined operations on . To be well-defined the operations must output elements that lie not just in , but in itself. This is precisely what being closed under addition and scalar multiplication guarantees. In more detail, since for all (Axiom (ii)), the vector addition on gives rise by restriction to a well-defined operation on ; similarly, since for all and , the scalar multiplication operation on gives rise by restriction to a well-defined scalar multiplication on .  Once we know restriction gives rise to well-defined operations on , verifying the of amounts simply to observing that if a condition is true for all in , it is certainly true for all in the subset .  The existential axioms (iii) and (iv) of , however, require special consideration. By definition, a subspace contains the zero vector of , and clearly this still acts as the zero vector when we restrict the vector operations to . What about vector inverses? We know that for any there is a vector inverse lying somewhere in . We must show that in fact lies in : we need to show that the operation of taking the vector inverse is well-defined on . We prove this as follows: .    Before moving on to more examples of subspaces, we provide a procedure for determining whether something is a subspace. Note that the procedure merges the verification of Axioms (ii)-(iii) of into a single step, using the notion of a linear combination . Now is a good time to make this notion official.   Linear combination   Let be an -vector space, and let be a collection of vectors of . A linear combination of the vectors is a vector expression of the form , where for all . The scalars are called the coefficients of the linear combination. The linear combination is trivial if for all , and nontrivial if for some . A vector is a linear combination of the if we have for some choice of scalars .     Two-step proof for subspaces   We can merge conditions (ii)-(iii) of into a single statement about linear combinations, deriving the following two-step method for proving that a set is a subspace of a vector space .   Show     Show that , for all .        below serves both as an illustration of and a rich source of examples of subspaces. It tells us that the solutions to a matrix equation constitutes a subspace of . This set is called the null space of the matrix. (We will postpone an official definition of null space until we introduce linear transformations.)  The statement and proof of will make use of matrix multiplication and elementary properties that matrix multiplication satisfies. The usual definition of matrix multiplication (for real matrices) generalizes directly to an arbitrary field, and as such we will not include an official definition. Furthermore, all the usual matrix multiplication properties you know and love over the reals carry over to the more general setting of matrices over a general field . We will take this for granted and not include an official statement of those properties.  Lastly, we include another fiat that facilitates dealing with so-called column vectors  .   Tuples shall be column vectors, and vice versa   We hereby declare that all -tuples shall be equated with the corresponding column vector in : , in .     Matrix null space   Let . The set of solutions to the matrix equation is a subspace of .    We follow .   Note that according to , we have , and thus . This proves that .    We want to show that if , then so is for any ,  Assume . By definition this means . But then we have , showing that , as desired.        Hyperplanes of   A hyperplane of is a set defined as the set of solutions to a linear equation of the form , where and for some . (In other words is the set of solutions to a nontrivial linear equation with coefficients in .)   Prove that if , then is not a subspace of .    Prove that if , then is a subspace of .          If , then clearly , since . It follows that is not a subspace in this case, since it fails Axiom (i).    Assume . Let , the matrix consisting of the coefficients of the linear equation. We have . Thus is a subspace by .         Important function subspaces   Polynomials   Assume , and let be an infinite subset of . A polynomial function on is a function that can be written in the form , for some nonnegative integer and scalars . Given as in , is called the -th coefficient of ; furthermore, if , we call the leading term of , and we if , and we define the degree of , denoted to be .  Given a nonnegative integer , we define to be the set of all polynomial functions on of degree at most : , . Lastly we define to be the set of all polynomial functions on . Since any polynomial on is of the form for some , we have .     Polynomial spaces   Let , and let be an infinite subset of .    is a subspace of .     is a subspace of for all .       We prove that is a subspace, using the 2-step technique. The proof for is similar.   Recall that the zero vector of is the the zero function , defined as for all . Writing , we see that . (More generally, any constant function is an element of for all .)    Assume . By definition this means that there are constants , , such that for all . It follows that for all , showing that , as desired.       Although not necessary for the proof of , the result below will be useful to us for future discussions. In short, it says that the coefficients of a polynomial uniquely determine it (as long as the domain is infinite).   Polynomial equality   Let and let be an infinite subset of .   Given , we have .    Given and with and , we have .       This is a standard result about polynomials, and is a consequence of the fact that a polynomial of degree has at most distinct roots. We do not provide a proof here.     Function subspaces over   Let be an interval of that contains at least two elements.   We denote by the set of all continuous functions on : i.e., .    Fix . A function is on if is -times differentiable on and its -th derivative is continuous. The set of all functions on is denoted .    A function is on I if is infinitely differentiable on . The set of all functions on is denoted .        Function subspaces.   Let be a an interval containing at least two elements. The sets , , , , are all subspaces of , and we have the following chain of subspaces: .     This is an instance of proof by calculus . That each of these sets is closed under addition and scalar multiplication follows from elementary results in single-variable calculus: , that sums and scalar multiples of continuous functions are continuous, that sums and scalar multiples of differentiable functions are differentiable, .    "
},
{
  "id": "d_subspace",
  "level": "2",
  "url": "s_subspace.html#d_subspace",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Subspace.",
  "body": " Subspace   Let be a vector space. A subset is a subspace of if the following conditions hold.   contains the zero vector   .    is closed under addition  For all , if , then . Using logical shorthand: .    is closed under scalar multiplication  For all and , if , then . Using logical shorthand: .      "
},
{
  "id": "eg_subspace_trivial",
  "level": "2",
  "url": "s_subspace.html#eg_subspace_trivial",
  "type": "Example",
  "number": "1.4.2",
  "title": "Trivial subspaces.",
  "body": " Trivial subspaces   Let be an -vector space. The following are subspaces of :            In other words, the set containing just the zero vector is a subspace of , as is itself. These are sometimes called the trivial subspaces of . Observe that every subspace lies between these two: , we have .    We prove that is a subspace of , leaving the proof for to the reader.   By definition, .    Since is the only element of and since , we see that is closed under addition.    Since is the only element of , we need only show that for all scalars . But we have by . Thus , as desired.   This proves is a subspace of .   "
},
{
  "id": "ss_subspace_def-4",
  "level": "2",
  "url": "s_subspace.html#ss_subspace_def-4",
  "type": "Example",
  "number": "1.4.3",
  "title": "",
  "body": "  Let and let . Prove that is a subspace.    We must show properties (i)-(iii) hold for .   The zero element of is , which is certainly of the form . Thus .    We must prove the implication . .    We must prove the implication , for any . We have       "
},
{
  "id": "ss_subspace_def-5",
  "level": "2",
  "url": "s_subspace.html#ss_subspace_def-5",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  Let and let . Is a vector space? Decide which of the of properties (i)-(iii) in (if any) are satisfied by .       Clearly .    Suppose . Then , in which case , and hence . Thus is closed under addition.    The set is not closed under scalar multiplication. Indeed, let . Then .      "
},
{
  "id": "th_subspace_vectorspace",
  "level": "2",
  "url": "s_subspace.html#th_subspace_vectorspace",
  "type": "Theorem",
  "number": "1.4.5",
  "title": "Subspaces are vector spaces.",
  "body": " Subspaces are vector spaces   Let be a subspace of the vector space .   The vector operations of restrict to operations on that satisfy the vector space axioms.    The zero vector of , considered as a vector space, is the zero vector of .    Given an element , its vector inverse with respect to the vector space structure of is equal to its vector inverse with respect to the vector space structure of .       It is important to understand how Axioms of come into play here. Without them we would not be able to say that restricting the vector operations of to elements of actually gives rise to well-defined operations on . To be well-defined the operations must output elements that lie not just in , but in itself. This is precisely what being closed under addition and scalar multiplication guarantees. In more detail, since for all (Axiom (ii)), the vector addition on gives rise by restriction to a well-defined operation on ; similarly, since for all and , the scalar multiplication operation on gives rise by restriction to a well-defined scalar multiplication on .  Once we know restriction gives rise to well-defined operations on , verifying the of amounts simply to observing that if a condition is true for all in , it is certainly true for all in the subset .  The existential axioms (iii) and (iv) of , however, require special consideration. By definition, a subspace contains the zero vector of , and clearly this still acts as the zero vector when we restrict the vector operations to . What about vector inverses? We know that for any there is a vector inverse lying somewhere in . We must show that in fact lies in : we need to show that the operation of taking the vector inverse is well-defined on . We prove this as follows: .   "
},
{
  "id": "d_linear_comb",
  "level": "2",
  "url": "s_subspace.html#d_linear_comb",
  "type": "Definition",
  "number": "1.4.6",
  "title": "Linear combination.",
  "body": " Linear combination   Let be an -vector space, and let be a collection of vectors of . A linear combination of the vectors is a vector expression of the form , where for all . The scalars are called the coefficients of the linear combination. The linear combination is trivial if for all , and nontrivial if for some . A vector is a linear combination of the if we have for some choice of scalars .   "
},
{
  "id": "proc_subspace",
  "level": "2",
  "url": "s_subspace.html#proc_subspace",
  "type": "Procedure",
  "number": "1.4.7",
  "title": "Two-step proof for subspaces.",
  "body": " Two-step proof for subspaces   We can merge conditions (ii)-(iii) of into a single statement about linear combinations, deriving the following two-step method for proving that a set is a subspace of a vector space .   Show     Show that , for all .      "
},
{
  "id": "fiat_col_vecs_tuples",
  "level": "2",
  "url": "s_subspace.html#fiat_col_vecs_tuples",
  "type": "Fiat",
  "number": "1.4.8",
  "title": "Tuples shall be column vectors, and vice versa.",
  "body": " Tuples shall be column vectors, and vice versa   We hereby declare that all -tuples shall be equated with the corresponding column vector in : , in .   "
},
{
  "id": "th_matrix_null_space",
  "level": "2",
  "url": "s_subspace.html#th_matrix_null_space",
  "type": "Theorem",
  "number": "1.4.9",
  "title": "Matrix null space.",
  "body": " Matrix null space   Let . The set of solutions to the matrix equation is a subspace of .    We follow .   Note that according to , we have , and thus . This proves that .    We want to show that if , then so is for any ,  Assume . By definition this means . But then we have , showing that , as desired.      "
},
{
  "id": "eg_subspace_hyperplane",
  "level": "2",
  "url": "s_subspace.html#eg_subspace_hyperplane",
  "type": "Example",
  "number": "1.4.10",
  "title": "Hyperplanes of <span class=\"process-math\">\\(\\R^n\\)<\/span>.",
  "body": " Hyperplanes of   A hyperplane of is a set defined as the set of solutions to a linear equation of the form , where and for some . (In other words is the set of solutions to a nontrivial linear equation with coefficients in .)   Prove that if , then is not a subspace of .    Prove that if , then is a subspace of .          If , then clearly , since . It follows that is not a subspace in this case, since it fails Axiom (i).    Assume . Let , the matrix consisting of the coefficients of the linear equation. We have . Thus is a subspace by .      "
},
{
  "id": "d_polynomials",
  "level": "2",
  "url": "s_subspace.html#d_polynomials",
  "type": "Definition",
  "number": "1.4.11",
  "title": "Polynomials.",
  "body": " Polynomials   Assume , and let be an infinite subset of . A polynomial function on is a function that can be written in the form , for some nonnegative integer and scalars . Given as in , is called the -th coefficient of ; furthermore, if , we call the leading term of , and we if , and we define the degree of , denoted to be .  Given a nonnegative integer , we define to be the set of all polynomial functions on of degree at most : , . Lastly we define to be the set of all polynomial functions on . Since any polynomial on is of the form for some , we have .   "
},
{
  "id": "th_polynomial_space",
  "level": "2",
  "url": "s_subspace.html#th_polynomial_space",
  "type": "Theorem",
  "number": "1.4.12",
  "title": "Polynomial spaces.",
  "body": " Polynomial spaces   Let , and let be an infinite subset of .    is a subspace of .     is a subspace of for all .       We prove that is a subspace, using the 2-step technique. The proof for is similar.   Recall that the zero vector of is the the zero function , defined as for all . Writing , we see that . (More generally, any constant function is an element of for all .)    Assume . By definition this means that there are constants , , such that for all . It follows that for all , showing that , as desired.      "
},
{
  "id": "th_poly_equality",
  "level": "2",
  "url": "s_subspace.html#th_poly_equality",
  "type": "Theorem",
  "number": "1.4.13",
  "title": "Polynomial equality.",
  "body": " Polynomial equality   Let and let be an infinite subset of .   Given , we have .    Given and with and , we have .       This is a standard result about polynomials, and is a consequence of the fact that a polynomial of degree has at most distinct roots. We do not provide a proof here.   "
},
{
  "id": "d_function_subspaces",
  "level": "2",
  "url": "s_subspace.html#d_function_subspaces",
  "type": "Definition",
  "number": "1.4.14",
  "title": "Function subspaces over <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Function subspaces over   Let be an interval of that contains at least two elements.   We denote by the set of all continuous functions on : i.e., .    Fix . A function is on if is -times differentiable on and its -th derivative is continuous. The set of all functions on is denoted .    A function is on I if is infinitely differentiable on . The set of all functions on is denoted .      "
},
{
  "id": "th_function_spaces",
  "level": "2",
  "url": "s_subspace.html#th_function_spaces",
  "type": "Theorem",
  "number": "1.4.15",
  "title": "Function subspaces..",
  "body": " Function subspaces.   Let be a an interval containing at least two elements. The sets , , , , are all subspaces of , and we have the following chain of subspaces: .   "
},
{
  "id": "ss_function_spaces-8",
  "level": "2",
  "url": "s_subspace.html#ss_function_spaces-8",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " This is an instance of proof by calculus . That each of these sets is closed under addition and scalar multiplication follows from elementary results in single-variable calculus: , that sums and scalar multiples of continuous functions are continuous, that sums and scalar multiples of differentiable functions are differentiable, .  "
},
{
  "id": "s_subspace_sum",
  "level": "1",
  "url": "s_subspace_sum.html",
  "type": "Section",
  "number": "1.5",
  "title": "Subspace sums",
  "body": " Subspace sums   Vector operations on sets   Let be an -vector space. Given subsets of , we define their sum , denoted or , as . Similarly, given a set and scalar , we define the scalar multiple  as .     Sum of subspaces   Let be subspaces of the -vector space , and let be their sum.    is a subspace of .     is the smallest subspace of satisfying for all in the following sense: if is a subspace of satisfying for all , then .          We follow .  Since for all , and since , we see that .  Assume . By definition, we have . But then for any scalars , we have , where for all . Since each is a subspace, we have for all . We conclude that , as desired.    For any , we have , where . Since for all , we see that . Since was an arbitrary element of , we conclude that for all .  Now assume is a subspace of that contains for all . We will show that . Indeed, given any , we have for some vectors , where . Since for all , we have for all ; since is closed under addition, we have , as desired.        Sums of subspaces   Let and consider the following subsets of : .   Prove that each is a subspace of .    Identify as a familiar subspace of . Justify your answer.    Identify as a familiar subspace of . Justify your answer.    Identify as a familiar subspace of . Justify your answer.          It is fairly clear that each above contains the zero vector and is closed under addition and scalar multiplication. We leave a careful proof of these facts to the reader.    Let , the -plane. Claim: . We prove both inclusions of this set equality separately.  Given , we have for some and . But then . Thus .  For the other direction, given any , we have . Thus , and we conclude .    Claim: , with as above. The inclusion is obvious and can be proved just as above. The reverse inclusion requires a little more work.  Given we must show that there are elements and satisfying . Equating coordinates we see that we want to find a solution to the linear system , where and are given. We easily solve to conclude that there is in fact exactly one solution: . In particular we have . This proves and hence that .    Claim: , with as above. First observe that since is a subspace and for all , we then have by (2) of . For the other inclusion, observe that by the first part, and thus . We conclude that .        Direct sum of subspaces   Let be subspaces of the -vector space . We say is the direct sum of the subspaces , denoted , or , if the following conditions hold.    .    For each there is a unique choice of vectors such that . In other words if we have , where for all , then for all .   We call a direct sum decomposition of .     Direct sum   Let and consider the following subspaces of : .   Show that and .    Show that .          We know already that from . Furthermore, it is clear by inspection that the decomposition if and only if and , showing that . Furthermore, in we showed that if and only if . Thus .    We know that from . To see that is not the direct sum of the it suffices to show one example of a vector that can be decomposed into a sum of elements of in two distinct ways. Here is such an example: .        Direct sum decomposition of   Consider the space of -tuples with coefficients in . For each , let be the set of all -tuples of the form . In other words is the set of all -tuples whose -th coordinates are equal to zero for all .  Prove that . You may take for granted that is a subspace of for all .    Given we have , where . It follows that . Furthermore, the decomposition is unique: if with for all , then since is the only vector with a nonzero -th coordinate, we must have . Since the decompotision is unique, we conclude that .     Direct sum of subspaces   Let be subspaces of the -vector space , and let . The following statements are equivalent.        If with for all , then for all . Using logical shorthand: .       Since the premises include the assumption that we need only show that condition (ii) of is equivalent to condition . We prove both implications separately.  Suppose condition (ii) of is satisfied. Since is one decomposition of into elements of the , and since (ii) asserts such decompositions are unique, we conclude that holds.  Assume holds, and suppose we have with . It follows, after a little algebra, that . Since we assume condition , we conclude that for all , or equivalently, for all , as desired.      Let and be subspaces of the -vector space , and let . The following statements are equivalent.    .     .       We prove both implications separately.   Implication: (1) (2)  Assume . Since for , we have . It remains to prove the reverse inclusion . Given , we have and , and thus is a decomposition of in terms of and . Since , we conclude from that . Thus .    Implication: (2) (1)  Now assume . Using , it suffices to show that if with and , then . If with , then we have , and hence that and . Since , we conclude that , as desired.      Matrix notation    Matrix whose -th entry is     -th entry of the matrix    Let be a field. We adopt the following notation for matrices of .   Matrix-building notation  The notation denotes the matrix of whose -th entry is for all and . When there is no danger of confusion, this notation will be shortened to .    Matrix entry notation  Given a matrix , for all and , denotes the -th entry of .        Transpose matrix   Given a matrix , its transpose is the matrix whose -th entry is the -th entry of for all . In other words, is the unique matrix of satisfying for all and .     Direct sum of matrix spaces   Let , the space of all matrices with entries in , and consider the following subsets of : . In other words, is the set of all symmetric matrices of and is the set of all skew-symmetric matrices of .   Prove that and are subspaces of .    Prove that .          Using the defining conditions and , it is easy to see that . From these descriptions it follows easily that and contain the zero matrix, and are closed under addition and scalar multiplication. We leave the details to the reader.    Let . First we show that . To do so, it suffices to show by . But this is clear from the parametric descriptions of and given above.  Next we show that . By definition we have , so we need only show the reverse inclusion. Given an arbitrary matrix , we must show that we can write where and . In other words, we must show that any matrix can be written as a sum of a symmetric matrix and a skew-symmetric matrix. This can be done essentially by inspection in this low-dimensional case ( ): we have for any matrix . This fact is true more generally, however, and so it is worth adding an argument that works for all : namely, observe that , where . Using elementary properties of transpose, it is now easy to show that and : , and . We will remind you of these elementary properties of the transpose operator later on.       "
},
{
  "id": "d_vec_ops_sets",
  "level": "2",
  "url": "s_subspace_sum.html#d_vec_ops_sets",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Vector operations on sets.",
  "body": " Vector operations on sets   Let be an -vector space. Given subsets of , we define their sum , denoted or , as . Similarly, given a set and scalar , we define the scalar multiple  as .   "
},
{
  "id": "th_subspace_sum",
  "level": "2",
  "url": "s_subspace_sum.html#th_subspace_sum",
  "type": "Theorem",
  "number": "1.5.2",
  "title": "Sum of subspaces.",
  "body": " Sum of subspaces   Let be subspaces of the -vector space , and let be their sum.    is a subspace of .     is the smallest subspace of satisfying for all in the following sense: if is a subspace of satisfying for all , then .          We follow .  Since for all , and since , we see that .  Assume . By definition, we have . But then for any scalars , we have , where for all . Since each is a subspace, we have for all . We conclude that , as desired.    For any , we have , where . Since for all , we see that . Since was an arbitrary element of , we conclude that for all .  Now assume is a subspace of that contains for all . We will show that . Indeed, given any , we have for some vectors , where . Since for all , we have for all ; since is closed under addition, we have , as desired.      "
},
{
  "id": "eg_sum_R3",
  "level": "2",
  "url": "s_subspace_sum.html#eg_sum_R3",
  "type": "Example",
  "number": "1.5.3",
  "title": "Sums of subspaces.",
  "body": " Sums of subspaces   Let and consider the following subsets of : .   Prove that each is a subspace of .    Identify as a familiar subspace of . Justify your answer.    Identify as a familiar subspace of . Justify your answer.    Identify as a familiar subspace of . Justify your answer.          It is fairly clear that each above contains the zero vector and is closed under addition and scalar multiplication. We leave a careful proof of these facts to the reader.    Let , the -plane. Claim: . We prove both inclusions of this set equality separately.  Given , we have for some and . But then . Thus .  For the other direction, given any , we have . Thus , and we conclude .    Claim: , with as above. The inclusion is obvious and can be proved just as above. The reverse inclusion requires a little more work.  Given we must show that there are elements and satisfying . Equating coordinates we see that we want to find a solution to the linear system , where and are given. We easily solve to conclude that there is in fact exactly one solution: . In particular we have . This proves and hence that .    Claim: , with as above. First observe that since is a subspace and for all , we then have by (2) of . For the other inclusion, observe that by the first part, and thus . We conclude that .      "
},
{
  "id": "d_subspace_direct_sum",
  "level": "2",
  "url": "s_subspace_sum.html#d_subspace_direct_sum",
  "type": "Definition",
  "number": "1.5.4",
  "title": "Direct sum of subspaces.",
  "body": " Direct sum of subspaces   Let be subspaces of the -vector space . We say is the direct sum of the subspaces , denoted , or , if the following conditions hold.    .    For each there is a unique choice of vectors such that . In other words if we have , where for all , then for all .   We call a direct sum decomposition of .   "
},
{
  "id": "eg_direct_sum_Rn",
  "level": "2",
  "url": "s_subspace_sum.html#eg_direct_sum_Rn",
  "type": "Example",
  "number": "1.5.5",
  "title": "Direct sum.",
  "body": " Direct sum   Let and consider the following subspaces of : .   Show that and .    Show that .          We know already that from . Furthermore, it is clear by inspection that the decomposition if and only if and , showing that . Furthermore, in we showed that if and only if . Thus .    We know that from . To see that is not the direct sum of the it suffices to show one example of a vector that can be decomposed into a sum of elements of in two distinct ways. Here is such an example: .      "
},
{
  "id": "eg_direct_sum_Fn",
  "level": "2",
  "url": "s_subspace_sum.html#eg_direct_sum_Fn",
  "type": "Example",
  "number": "1.5.6",
  "title": "Direct sum decomposition of <span class=\"process-math\">\\(F^n\\)<\/span>.",
  "body": " Direct sum decomposition of   Consider the space of -tuples with coefficients in . For each , let be the set of all -tuples of the form . In other words is the set of all -tuples whose -th coordinates are equal to zero for all .  Prove that . You may take for granted that is a subspace of for all .    Given we have , where . It follows that . Furthermore, the decomposition is unique: if with for all , then since is the only vector with a nonzero -th coordinate, we must have . Since the decompotision is unique, we conclude that .   "
},
{
  "id": "th_subspace_direct_sum",
  "level": "2",
  "url": "s_subspace_sum.html#th_subspace_direct_sum",
  "type": "Theorem",
  "number": "1.5.7",
  "title": "Direct sum of subspaces.",
  "body": " Direct sum of subspaces   Let be subspaces of the -vector space , and let . The following statements are equivalent.        If with for all , then for all . Using logical shorthand: .       Since the premises include the assumption that we need only show that condition (ii) of is equivalent to condition . We prove both implications separately.  Suppose condition (ii) of is satisfied. Since is one decomposition of into elements of the , and since (ii) asserts such decompositions are unique, we conclude that holds.  Assume holds, and suppose we have with . It follows, after a little algebra, that . Since we assume condition , we conclude that for all , or equivalently, for all , as desired.   "
},
{
  "id": "cor_subspace_dir_sum",
  "level": "2",
  "url": "s_subspace_sum.html#cor_subspace_dir_sum",
  "type": "Corollary",
  "number": "1.5.8",
  "title": "",
  "body": "  Let and be subspaces of the -vector space , and let . The following statements are equivalent.    .     .       We prove both implications separately.   Implication: (1) (2)  Assume . Since for , we have . It remains to prove the reverse inclusion . Given , we have and , and thus is a decomposition of in terms of and . Since , we conclude from that . Thus .    Implication: (2) (1)  Now assume . Using , it suffices to show that if with and , then . If with , then we have , and hence that and . Since , we conclude that , as desired.    "
},
{
  "id": "d_matrix_notation",
  "level": "2",
  "url": "s_subspace_sum.html#d_matrix_notation",
  "type": "Definition",
  "number": "1.5.9",
  "title": "Matrix notation.",
  "body": " Matrix notation    Matrix whose -th entry is     -th entry of the matrix    Let be a field. We adopt the following notation for matrices of .   Matrix-building notation  The notation denotes the matrix of whose -th entry is for all and . When there is no danger of confusion, this notation will be shortened to .    Matrix entry notation  Given a matrix , for all and , denotes the -th entry of .      "
},
{
  "id": "d_transpose",
  "level": "2",
  "url": "s_subspace_sum.html#d_transpose",
  "type": "Definition",
  "number": "1.5.10",
  "title": "Transpose matrix.",
  "body": " Transpose matrix   Given a matrix , its transpose is the matrix whose -th entry is the -th entry of for all . In other words, is the unique matrix of satisfying for all and .   "
},
{
  "id": "eg_direct_sum_matrices",
  "level": "2",
  "url": "s_subspace_sum.html#eg_direct_sum_matrices",
  "type": "Example",
  "number": "1.5.11",
  "title": "Direct sum of matrix spaces.",
  "body": " Direct sum of matrix spaces   Let , the space of all matrices with entries in , and consider the following subsets of : . In other words, is the set of all symmetric matrices of and is the set of all skew-symmetric matrices of .   Prove that and are subspaces of .    Prove that .          Using the defining conditions and , it is easy to see that . From these descriptions it follows easily that and contain the zero matrix, and are closed under addition and scalar multiplication. We leave the details to the reader.    Let . First we show that . To do so, it suffices to show by . But this is clear from the parametric descriptions of and given above.  Next we show that . By definition we have , so we need only show the reverse inclusion. Given an arbitrary matrix , we must show that we can write where and . In other words, we must show that any matrix can be written as a sum of a symmetric matrix and a skew-symmetric matrix. This can be done essentially by inspection in this low-dimensional case ( ): we have for any matrix . This fact is true more generally, however, and so it is worth adding an argument that works for all : namely, observe that , where . Using elementary properties of transpose, it is now easy to show that and : , and . We will remind you of these elementary properties of the transpose operator later on.      "
},
{
  "id": "s_span_ind",
  "level": "1",
  "url": "s_span_ind.html",
  "type": "Section",
  "number": "1.6",
  "title": "Span and linear independence",
  "body": " Span and linear independence   There are many situations in mathematics where we want to describe an infinite set in a concise and useful manner. A guiding example of this for us is the parametric description of infinite sets of solutions to systems of linear equations that you learn about in a first course in linear algebra. We would like to develop an analogous technique for describing general vector spaces and their subspaces.  As we will see in the next section the relevant linear algebraic tool for this purpose is the concept of a basis . Loosely speaking, a basis for a vector space is a set of vectors that is large enough to generate the entire space, and small enough to contain no redundancies . What exactly we mean by generate is captured by the rigorous notion of span ; and what we mean by no redundancies is captured by linear independence .    Span  In a nutshell we will define the span of a tuple of vectors to be the set of all linear combinations of those vectors. Since we allow the index set of a tuple to be arbitrary (and possibly infinite), we need to first make proper sense of what a linear combination of is. We do so with the following somewhat technical definition.   Linear combination of a tuple   Let be an -vector space, and let be a tuple of elements of where is nonempty. A linear combination of the vectors is an expression of the form , where for all , and for all but finitely many .  If for all , we call the linear combination the trivial linear combination and define . Otherwise, letting be the finitely many nonzero coefficients, we define .     Linear combination of tuples  For the most part we will be dealing with -tuples of vectors, where the index set . In this special case, the for all but finitely many condition is automatic, making very straightforward: a linear combination of a tuple is just a vector of the form , where .   We now proceed to the definition of the span of a tuple of vectors. The definition is broken into two cases depending on whether is the empty tuple (a list with no elements).   Span   Let be an -vector space, and let be a tuple of vectors of , where is a nonempty set. The span of , denoted , is defined as follows.   If , and consequently is the empty tuple (or empty list), then we define .    If , then we define as the set of all linear combinations of : , .        Let be tuple of vectors in .   The zero vector is always an element of . We treat the cases where is empty or nonempty separately.  If , then is the empty tuple and by definition.  If , then we can always express as the trivial linear combination . Thus .    The set is contained in . Indeed, given any , we have .    For a tuple of length 1, we have , the set of all scalar multiples of .       Examples in   Let . For each tuple , identify as a familiar geometric object.              ,                                , the set containing just the origin, by definition.     is the set of all scalar multiples of . Thus , the set containing just the origin.     is the set of all scalar multiples of the nonzero vector . Geometrically, this is the line that passes through the the origin and the point .    By definition .    By definition . It is easy to see that this set is equal to , the line with equation . Note that in this case we have , and thus that the vector is in some sense redundant with respect to the span operation.    By definition . Claim: . Proving the claim amounts to showing that for all there exist such that . Solving this system using Gaussian elimination, we see that the system has the unique solution , and thus that . This proves , as claimed.    Observe first that in this case the index set for our tuple is , and the tuple is of the form . In other words, the tuple in this case is the list of all elements of ! By , we have for any tuple. Thus in this case . Since clearly , we see that , from which it follows .       You may have noticed that each span computation in the previous example produced a subspace of . This is no accident!   Spans are subspaces   Let be a tuple of vectors of the vector space .    is a subspace of .     is the smallest subspace of containing for all in the following sense: if is a subspace of and for all , then .          We use . As observed in , we always have . Next, given we have by definition where and for all but finitely many . But then for any , we have , and for all but finitely many . Thus , as desired.    If is a subspace of and for all , then since is closed under addition and scalar multiplication, contains all linear combinations of the . Thus contains : , .        Spanning set   Let be a subspace of the vector space . A spanning set of is a tuple of vectors of such that .     Standard spanning sets  Most of the vector spaces we've introduced there is a natural spanning set that comes to mind. We will refer to these loosely as standard spanning sets.   Zero space  Let . By definition the empty list is a spanning set of .    Tuples  Let . For , define to be the -tuple with a one in the -th entry, and zeros elsewhere. Then is a spanning set for .    Matrices  Let . For each with and , define to be the matrix with a one in the -th entry, and zeros elsewhere. Then is a spanning set for .    Polynomials  Let , and let be an infinite subset of . The tuple is a spanning set , as by definition the elements of are functions of the form .  Similarly, the tuple is a spanning set of .      It is important to observe that spanning sets for vector spaces are not unique. Far from it! In general, for any nonzero vector space there are infinitely many choices of spanning sets.   Spanning sets are not unique   For each and below, verify that is a spanning set for .    ,      , , .           This was shown in     We must show, given any , we can find such that , or . We can find such if and only if the system with augmented matrix is consistent. This matrix row reduces to . Since the last column will never contain a leading one, we conclude that the system is consistent for any choice of , and thus that , as claimed.          Linear independence  As mentioned above, the notion of linear independence is precisely what we need to guarantee that a given spanning set has no redundancies . This is not immediately evident from the definition, but will be made clear in ......   Linear independence   A tuple of vectors of the vector space is linearly independent if there is no nontrivial linear combination of the equal to : , if is a linear combination satisfying , then for all . Using logical shorthand: . We say is linearly dependent if it is not linearly independent: , if there is a nontrivial linear combination .  Lastly, observe that an empty list of vectors is linearly independent as it satisfies the implication vacuously.     Linear independence of a finite set   Let be a tuple of vectors of the vector space . To decide whether is linearly independent, proceed as follows.   Write out the general expression for a linear combination of the form .    If possible, translate this vector equation into a homogeneous system of linear equations in the unknowns , using the definition of equality for your vector space.    Decide, using Gaussian elimination, whether this system has any nonzero ( , nontrivial) solutions. If it has no nontrivial solution, is linearly independent; if it has a nontrivial solution, is linearly dependent.        Linear independence   For each tuple of the given vector space , decide whether is linearly independent.    ,      , , where .     ,           We have if and only if . After a little Gaussian elimination we see that is a nonzero solution to this system, and thus that is a nontrivial linear combination equal to . We conclude that is linearly dependent.    We have if and only if , if and only if . Gaussian elimination reveals that the corresponding system of equations has infinitely many solutions, and thus nontrivial solutions ( , ). We conclude that there is a nontrivial combination of the equal to , and hence that is linearly dependent.        Span and independence   Let be a nonempty tuple of vectors of the vector space . The following statements are equivalent.    is linearly dependent.    There is an index such that can be written as a linear combination of the other 's: , there exists such that . Furthermore, in this case we have .       If the tuple is linearly dependent, then there is a nontrivial linear combination , where . Since the linear combination is nontrivial, we have for some . After a little vector arithmetic, we can then solve for : . This shows is a linear combination of the vectors , where , and thus that .  Conversely, if we have , then we have for some and , whence it follows that is a nontrivial linear combination of the equal to . We conclude that is linearly dependent.  We have thus proved that is linearly dependent if and only if some can be written as a linear combination of the other vectors . We now prove that when this is the case, we have . Using statement (2) of , since is a subspace and contains for all , we have . For the other direction, take . By definition, we can write as a finite linear combination of the vectors . It follows that can write , where is a finite subset of not containing . (Note that is allowed to be 0 here.) Since is assumed to be a linear combination of the other vectors , we can express as in , in which case we have . Since for all , and since , we see that this is a linear combination of the tuple . Thus , showing that , as desired.     is a precise articulation of the fact that a tuple is linearly dependent if and only if one of the vectors is redundant . In more detail, it says that there is an index such that where for all , and furthermore, that in terms of the span operation, this redundant vector can be dropped. We will most often apply this result in the case where we have a tuple of finite length. We record the result in this special case as a corollary.   Span and independence   Let be an -tuple of vectors of the vector space . The following statements are equivalent.    is linearly dependent.    There exists such that . Furthermore, when this is the case we have . In other words, the span of the vectors is unchanged when we drop the redundant vector .        For the case in the statement of , we interpret the assertion as . In this somewhat degenerate case, it turns out that we must have . See the proof below.    Proof of corollary  The corollary is for the most part simply a special case of . It remains only to prove that if is linearly dependent, then there is a such that . This is proven as follows: if is linearly dependent, then we have a nontrivial linear combination . Since for some  , we can set to be the largest such : , . We now treat the cases and separately. If , then by definition of , we have and . Using , we conclude that in this case, and hence that . (When we interpret as .)  Now assume . By definition of , we have and , from whence it follows that , as desired.    "
},
{
  "id": "d_lin_comb_tuple",
  "level": "2",
  "url": "s_span_ind.html#d_lin_comb_tuple",
  "type": "Definition",
  "number": "1.6.1",
  "title": "Linear combination of a tuple.",
  "body": " Linear combination of a tuple   Let be an -vector space, and let be a tuple of elements of where is nonempty. A linear combination of the vectors is an expression of the form , where for all , and for all but finitely many .  If for all , we call the linear combination the trivial linear combination and define . Otherwise, letting be the finitely many nonzero coefficients, we define .   "
},
{
  "id": "ss_span-4",
  "level": "2",
  "url": "s_span_ind.html#ss_span-4",
  "type": "Remark",
  "number": "1.6.2",
  "title": "Linear combination of tuples.",
  "body": " Linear combination of tuples  For the most part we will be dealing with -tuples of vectors, where the index set . In this special case, the for all but finitely many condition is automatic, making very straightforward: a linear combination of a tuple is just a vector of the form , where .  "
},
{
  "id": "d_span",
  "level": "2",
  "url": "s_span_ind.html#d_span",
  "type": "Definition",
  "number": "1.6.3",
  "title": "Span.",
  "body": " Span   Let be an -vector space, and let be a tuple of vectors of , where is a nonempty set. The span of , denoted , is defined as follows.   If , and consequently is the empty tuple (or empty list), then we define .    If , then we define as the set of all linear combinations of : , .      "
},
{
  "id": "rm_span",
  "level": "2",
  "url": "s_span_ind.html#rm_span",
  "type": "Remark",
  "number": "1.6.4",
  "title": "",
  "body": " Let be tuple of vectors in .   The zero vector is always an element of . We treat the cases where is empty or nonempty separately.  If , then is the empty tuple and by definition.  If , then we can always express as the trivial linear combination . Thus .    The set is contained in . Indeed, given any , we have .    For a tuple of length 1, we have , the set of all scalar multiples of .     "
},
{
  "id": "eg_span_2space",
  "level": "2",
  "url": "s_span_ind.html#eg_span_2space",
  "type": "Example",
  "number": "1.6.5",
  "title": "Examples in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Examples in   Let . For each tuple , identify as a familiar geometric object.              ,                                , the set containing just the origin, by definition.     is the set of all scalar multiples of . Thus , the set containing just the origin.     is the set of all scalar multiples of the nonzero vector . Geometrically, this is the line that passes through the the origin and the point .    By definition .    By definition . It is easy to see that this set is equal to , the line with equation . Note that in this case we have , and thus that the vector is in some sense redundant with respect to the span operation.    By definition . Claim: . Proving the claim amounts to showing that for all there exist such that . Solving this system using Gaussian elimination, we see that the system has the unique solution , and thus that . This proves , as claimed.    Observe first that in this case the index set for our tuple is , and the tuple is of the form . In other words, the tuple in this case is the list of all elements of ! By , we have for any tuple. Thus in this case . Since clearly , we see that , from which it follows .      "
},
{
  "id": "th_span",
  "level": "2",
  "url": "s_span_ind.html#th_span",
  "type": "Theorem",
  "number": "1.6.6",
  "title": "Spans are subspaces.",
  "body": " Spans are subspaces   Let be a tuple of vectors of the vector space .    is a subspace of .     is the smallest subspace of containing for all in the following sense: if is a subspace of and for all , then .          We use . As observed in , we always have . Next, given we have by definition where and for all but finitely many . But then for any , we have , and for all but finitely many . Thus , as desired.    If is a subspace of and for all , then since is closed under addition and scalar multiplication, contains all linear combinations of the . Thus contains : , .      "
},
{
  "id": "d_spanning_tuple",
  "level": "2",
  "url": "s_span_ind.html#d_spanning_tuple",
  "type": "Definition",
  "number": "1.6.7",
  "title": "Spanning set.",
  "body": " Spanning set   Let be a subspace of the vector space . A spanning set of is a tuple of vectors of such that .   "
},
{
  "id": "eg_spanning_sets",
  "level": "2",
  "url": "s_span_ind.html#eg_spanning_sets",
  "type": "Example",
  "number": "1.6.8",
  "title": "Standard spanning sets.",
  "body": " Standard spanning sets  Most of the vector spaces we've introduced there is a natural spanning set that comes to mind. We will refer to these loosely as standard spanning sets.   Zero space  Let . By definition the empty list is a spanning set of .    Tuples  Let . For , define to be the -tuple with a one in the -th entry, and zeros elsewhere. Then is a spanning set for .    Matrices  Let . For each with and , define to be the matrix with a one in the -th entry, and zeros elsewhere. Then is a spanning set for .    Polynomials  Let , and let be an infinite subset of . The tuple is a spanning set , as by definition the elements of are functions of the form .  Similarly, the tuple is a spanning set of .     "
},
{
  "id": "ss_span-14",
  "level": "2",
  "url": "s_span_ind.html#ss_span-14",
  "type": "Example",
  "number": "1.6.9",
  "title": "Spanning sets are not unique.",
  "body": " Spanning sets are not unique   For each and below, verify that is a spanning set for .    ,      , , .           This was shown in     We must show, given any , we can find such that , or . We can find such if and only if the system with augmented matrix is consistent. This matrix row reduces to . Since the last column will never contain a leading one, we conclude that the system is consistent for any choice of , and thus that , as claimed.       "
},
{
  "id": "d_lin_ind",
  "level": "2",
  "url": "s_span_ind.html#d_lin_ind",
  "type": "Definition",
  "number": "1.6.10",
  "title": "Linear independence.",
  "body": " Linear independence   A tuple of vectors of the vector space is linearly independent if there is no nontrivial linear combination of the equal to : , if is a linear combination satisfying , then for all . Using logical shorthand: . We say is linearly dependent if it is not linearly independent: , if there is a nontrivial linear combination .  Lastly, observe that an empty list of vectors is linearly independent as it satisfies the implication vacuously.   "
},
{
  "id": "proc_linear_independence",
  "level": "2",
  "url": "s_span_ind.html#proc_linear_independence",
  "type": "Procedure",
  "number": "1.6.11",
  "title": "Linear independence of a finite set.",
  "body": " Linear independence of a finite set   Let be a tuple of vectors of the vector space . To decide whether is linearly independent, proceed as follows.   Write out the general expression for a linear combination of the form .    If possible, translate this vector equation into a homogeneous system of linear equations in the unknowns , using the definition of equality for your vector space.    Decide, using Gaussian elimination, whether this system has any nonzero ( , nontrivial) solutions. If it has no nontrivial solution, is linearly independent; if it has a nontrivial solution, is linearly dependent.      "
},
{
  "id": "ex_linear_independence",
  "level": "2",
  "url": "s_span_ind.html#ex_linear_independence",
  "type": "Example",
  "number": "1.6.12",
  "title": "Linear independence.",
  "body": " Linear independence   For each tuple of the given vector space , decide whether is linearly independent.    ,      , , where .     ,           We have if and only if . After a little Gaussian elimination we see that is a nonzero solution to this system, and thus that is a nontrivial linear combination equal to . We conclude that is linearly dependent.    We have if and only if , if and only if . Gaussian elimination reveals that the corresponding system of equations has infinitely many solutions, and thus nontrivial solutions ( , ). We conclude that there is a nontrivial combination of the equal to , and hence that is linearly dependent.      "
},
{
  "id": "th_span_ind",
  "level": "2",
  "url": "s_span_ind.html#th_span_ind",
  "type": "Theorem",
  "number": "1.6.13",
  "title": "Span and independence.",
  "body": " Span and independence   Let be a nonempty tuple of vectors of the vector space . The following statements are equivalent.    is linearly dependent.    There is an index such that can be written as a linear combination of the other 's: , there exists such that . Furthermore, in this case we have .       If the tuple is linearly dependent, then there is a nontrivial linear combination , where . Since the linear combination is nontrivial, we have for some . After a little vector arithmetic, we can then solve for : . This shows is a linear combination of the vectors , where , and thus that .  Conversely, if we have , then we have for some and , whence it follows that is a nontrivial linear combination of the equal to . We conclude that is linearly dependent.  We have thus proved that is linearly dependent if and only if some can be written as a linear combination of the other vectors . We now prove that when this is the case, we have . Using statement (2) of , since is a subspace and contains for all , we have . For the other direction, take . By definition, we can write as a finite linear combination of the vectors . It follows that can write , where is a finite subset of not containing . (Note that is allowed to be 0 here.) Since is assumed to be a linear combination of the other vectors , we can express as in , in which case we have . Since for all , and since , we see that this is a linear combination of the tuple . Thus , showing that , as desired.   "
},
{
  "id": "cor_span_ind",
  "level": "2",
  "url": "s_span_ind.html#cor_span_ind",
  "type": "Corollary",
  "number": "1.6.14",
  "title": "Span and independence.",
  "body": " Span and independence   Let be an -tuple of vectors of the vector space . The following statements are equivalent.    is linearly dependent.    There exists such that . Furthermore, when this is the case we have . In other words, the span of the vectors is unchanged when we drop the redundant vector .      "
},
{
  "id": "ss_lin_ind-9",
  "level": "2",
  "url": "s_span_ind.html#ss_lin_ind-9",
  "type": "Remark",
  "number": "1.6.15",
  "title": "",
  "body": " For the case in the statement of , we interpret the assertion as . In this somewhat degenerate case, it turns out that we must have . See the proof below.  "
},
{
  "id": "ss_lin_ind-10",
  "level": "2",
  "url": "s_span_ind.html#ss_lin_ind-10",
  "type": "Proof",
  "number": "1",
  "title": "Proof of corollary.",
  "body": " Proof of corollary  The corollary is for the most part simply a special case of . It remains only to prove that if is linearly dependent, then there is a such that . This is proven as follows: if is linearly dependent, then we have a nontrivial linear combination . Since for some  , we can set to be the largest such : , . We now treat the cases and separately. If , then by definition of , we have and . Using , we conclude that in this case, and hence that . (When we interpret as .)  Now assume . By definition of , we have and , from whence it follows that , as desired.  "
},
{
  "id": "s_basis",
  "level": "1",
  "url": "s_basis.html",
  "type": "Section",
  "number": "1.7",
  "title": "Bases",
  "body": " Bases   Now that we have the notions of span and linear independence in place, we simply combine them to define a basis of a vector space. In the spirit of , a basis of a vector space should be understood as a minimal spanning set, or a spanning set containing no redundancies .    Definition and examples   Basis   A basis of a vector space is a tuple of vectors of satisfying the following properties.         is linearly independent.        Existence of bases  Do bases always exist: that is, given a vector space , can we find a basis of ? The answer is yes, assuming a general property about sets called the axiom of choice . (In fact you can show that the existence of bases in arbitrary vector spaces is equivalent to the axiom of choice.) This issue will not really come up in this course as for the most part our objects of study are finite-dimensional vector spaces, which by definition are assumed to have a finite basis of the form .    Some standard bases   It is easy to show that for each below, the given is a basis, which we will call the standard basis of . See for an explanation of the notation , below.    ,      ,      , , (Assume that and is infinite.)     , (Assume that and is infinite.)     ,        As with spanning sets, a nonzero vector space has many different bases: in fact, infinitely many in the case where the base field is or . This feature of vector spaces turns out to be a great virtue, and not a bug. Indeed, much of the computational power of linear algebra comes from our ability to choose a particular basis (not necessarily the standard one) that suits our needs for a given challenge.   Some nonstandard bases   For each and below, verify that is a basis of .    , .     , .       Each verification amounts to showing, using the techniques from , that the given spans the given and is linearly independent.   Since neither element of is a scalar multiple of the other, the set is linearly independent. To see that spans we show that for any we have for some . Indeed we may take and . (These formulas were obtained by solving the corresponding system of two equations in the unknowns and .)    First we show that spans . Given an arbitrary element , we must show that there exist scalars satisfying . Expanding out the left side of the above equality, we would have . Thus we have if and only if the linear system with augmented matrix is consistent. This augmented matrix row reduces to . Since there is no leading one in the last column, we see that the corresponding system is consistent, and thus , as desired.  Turning to linear independence of , we now endeavor to show that the only solution to is the trivial one . Just as above, such a solution corresponds to a solution to the linear system with augmented matrix , which row reduces to . Since the first four columns of this matrix contain leading ones, none of the unknowns is free, which means that is the unique solution to the system. This proves that , as desired.       As illustrated by the last example, proceeding directly from the definition, to show a tuple is a basis of we have to do two steps: (i) show ; (ii) show that is linearly independent. The following theorem gives rise to a convenient one-step technique for proving is a basis: show that every element of can be written as a linear combination of elements of in a unique way .   Basis equivalence   Let be a tuple of vectors of . The following statements are equivalent.    is a basis of .    For all there is a unique linear combination of such that .       We prove both implications separately.   Implication: (2) (1)  If (2) holds, then in particular for all there is at least one linear combination of the vectors equal to . Thus . Furthermore, taking , condition (2) tells us that there is exactly one linear combination , which then must be the trivial linear combination ( , for all ). This proves is linearly independent. Since is a spanning set and is linear independent, it is a basis.    Implication: (1) (2)  Assume is a basis. Since spans , for every vector there is at least one linear combination as in . Let us show that this linear combination is unique. Suppose we have , where and for all but finitely many . After some vector arithmetic, we see that . Since is linearly independent, we conclude that , and thus for all . This shows there is a unique linear combination of the equal to .      Unique basis representation   By way of illustration, we use to show that the tuple , , is a basis of . This follows from the simple observation that an arbitrary matrix can be written as a linear combination of the in a unique way. Indeed, since for each , the matrix is the only matrix in this collection that has a nonzero -th entry, and since furthermore this entry is equal to , is the unique expression of as a linear combination of the . This proves that every element of can be written as a linear combination of the in a unique way, and hence that is a basis.     yields the following one-step technique for proving a tuple is a basis.   One-step technique for bases   Let be a tuple of vectors of . To decide whether is a basis, proceed as follows.   Write out the vector equation , where is an arbitrary element of the vector space . (Typically you will give some parametric description of .)    Translate the vector equation into an equivalent linear system of equations in the unknowns .    If the system in (2) has a unique solution no matter what is chosen, then is a basis. If there is a choice of for which either the system in (2) has no solution ( , is inconsistent) or has infinitely many solutions, then is not a basis.        One-step basis technique   Use to decide whether is a basis of .    ,      ,              Finding bases  Besides deciding whether a given set is a basis, we will often want to come up with a basis of a given space on our own. The following by inspection technique often comes in handy in cases where the elements of the vector space can be described in a simple parametric manner.   By-inspection basis technique   To produce a basis of a vector space  by inspection , proceed as follows.   Parametric description  Give a simple parametric description of the general element of .    Spanning set  If your parametric description is simple enough, you should be able to extract from it a natural spanning set of .    Linear independence  If your parametric description is free of redundancies, then will likely be linearly independent. Verify this using .        By-inspection basis technique   Use to compute a basis of the subspace defined as .    The two equations give two independent conditions on and , and no condition on . We see that the general element of can be described as for arbitrary scalars . It follows immediately that spans . Furthermore, using , we have for any scalars . Thus is linearly independent. We conclude is a basis.     By-inspection basis technique   Let be the subspace of all symmetric matrices. Use to compute a basis of .    We follow the three steps of .   A general symmetric matrix can be described parametrically as .    We have . It follows immediately that the tuple is a spanning set, where .    The expression tells us that . This proves is linearly independent.   Since is a linearly independent spanning set of , it is a basis of .      Finite-dimensional vector spaces  In there is a glaring difference between the last vector space, , and the vector spaces before it: namely, the basis is infinite, whereas the previous bases were all finite. This turns out to be an essential difference between and the other vector spaces: namely, is infinite dimensional, while the others are finite dimensional. Let's make these notions rigorous. We begin with the general definition of the length of a tuple.   Length of a tuple   Let be a tuple of elements of the set .   If is finite, with cardinality , then we say is finite and of length  , denoted .    If is infinite, then we say is infinite , or of infinite length , denoted .        Finite\/infinite dimension   A vector space is finite dimensional if there is a finite basis of ; the vector space is infinite dimensional if there is no finite basis of . We write to indicate that is finite dimensional, and to indicate is infinite dimensional.     Finite\/infinite dimension  In the next section we give a complete definition of the dimension of a vector space. For now we are content simply to distinguish between finite- and infinite-dimensional spaces.   We showed that has an infinite basis. Does this mean that it is infinite dimensional? Not by definition alone, since we have not (as of yet) shown that does not have a finite basis. The following theorem nicely handles this issue for us.   Finite spanning set   Assume is a spanning set of the vector space of finite length . Any tuple of vectors of of length greater than (this includes infinite tuples) is linearly dependent. Equivalently, if is a linearly independent tuple of vectors of , then .    Axler provides a pleasant proof where one does not have to dirty one's hands with matrices. Personally, I enjoy digging in the dirt sometimes. In any case the argument below is a useful reminder about properties of linear systems.  First observe that it suffices to show that any finite tuple of length is linearly dependent, since if is an infinite tuple, then the subtuple is linearly dependent for any distinct list of indices . But then clearly the entire tuple is also linearly dependent since a nontrivial linear combination gives rise to a nontrivial linear combination of all of the vectors simply by setting for . (This argument shows that in general a tuple is linearly dependent if and only if some finite subtuple is linearly dependent.)  It remains to show that any tuple of of length is linearly dependent. Since is a spanning set of we may write, for each  where . We now show that there is a nontrivial linear combination . Indeed, we have . It follows that to produce a nontrivial linear combination of the equal to , it suffices to find a nonzero -tuple satisfying for all , or equivalently, a nonzero solution to the matrix equation , where . Since has more columns than rows ( ), our Gaussian elimination technique for solving such matrix equations gives rise to a free variable: row reduces to a matrix in row echelon form, one of whose columns does not have a leading one. The existence of a free variable in turn guarantees that there are infinitely many solutions to . In particular, there is some nontrivial solution . Our argument above implies that is then our desired nontrivial linear combination equal to .    Let's see why the theorem above implies is infinite dimensional. We give a proof by contradition. If were finite dimensional, then there would be a finite basis , and according to any tuple in of length greater than (including infinite tuples) would be linearly dependent. But we have seen that the (countably) infinite tuple is linearly independent in . Contradiction! Thus must be infinite dimensional. This type of argument applies more generally, as indicated by the following result.   Infinite-dimensional spaces   A vector space is infinite dimensional if and only if it contains an infinite linearly independent tuple .    The proof is left as an exercise.    We end with some useful facts about subtuples of linear independent\/dependent tuples.   Subtuples   Let be a tuple of elements of the set . Given a subset , we call the tuple a subtuple of .  Thinking in terms of functions, if is the tuple representation of the function , then the subtuple is the tuple representation of the restriction  of to .     Independence and subtuples   Let be a tuple of vectors in . The following statements are equivalent.    is linearly independent.    Every subtuple of is linearly independent.    Every finite subtuple of is linearly independent.   As a consequence, is linearly dependent if and only if it has a finite linearly dependent subtuple.    The proof is left as an exercise.     "
},
{
  "id": "d_basis",
  "level": "2",
  "url": "s_basis.html#d_basis",
  "type": "Definition",
  "number": "1.7.1",
  "title": "Basis.",
  "body": " Basis   A basis of a vector space is a tuple of vectors of satisfying the following properties.         is linearly independent.      "
},
{
  "id": "ss_basis_def-3",
  "level": "2",
  "url": "s_basis.html#ss_basis_def-3",
  "type": "Remark",
  "number": "1.7.2",
  "title": "Existence of bases.",
  "body": " Existence of bases  Do bases always exist: that is, given a vector space , can we find a basis of ? The answer is yes, assuming a general property about sets called the axiom of choice . (In fact you can show that the existence of bases in arbitrary vector spaces is equivalent to the axiom of choice.) This issue will not really come up in this course as for the most part our objects of study are finite-dimensional vector spaces, which by definition are assumed to have a finite basis of the form .  "
},
{
  "id": "eg_standard_bases",
  "level": "2",
  "url": "s_basis.html#eg_standard_bases",
  "type": "Example",
  "number": "1.7.3",
  "title": "Some standard bases.",
  "body": " Some standard bases   It is easy to show that for each below, the given is a basis, which we will call the standard basis of . See for an explanation of the notation , below.    ,      ,      , , (Assume that and is infinite.)     , (Assume that and is infinite.)     ,       "
},
{
  "id": "ss_basis_def-6",
  "level": "2",
  "url": "s_basis.html#ss_basis_def-6",
  "type": "Example",
  "number": "1.7.4",
  "title": "Some nonstandard bases.",
  "body": " Some nonstandard bases   For each and below, verify that is a basis of .    , .     , .       Each verification amounts to showing, using the techniques from , that the given spans the given and is linearly independent.   Since neither element of is a scalar multiple of the other, the set is linearly independent. To see that spans we show that for any we have for some . Indeed we may take and . (These formulas were obtained by solving the corresponding system of two equations in the unknowns and .)    First we show that spans . Given an arbitrary element , we must show that there exist scalars satisfying . Expanding out the left side of the above equality, we would have . Thus we have if and only if the linear system with augmented matrix is consistent. This augmented matrix row reduces to . Since there is no leading one in the last column, we see that the corresponding system is consistent, and thus , as desired.  Turning to linear independence of , we now endeavor to show that the only solution to is the trivial one . Just as above, such a solution corresponds to a solution to the linear system with augmented matrix , which row reduces to . Since the first four columns of this matrix contain leading ones, none of the unknowns is free, which means that is the unique solution to the system. This proves that , as desired.      "
},
{
  "id": "th_basis",
  "level": "2",
  "url": "s_basis.html#th_basis",
  "type": "Theorem",
  "number": "1.7.5",
  "title": "Basis equivalence.",
  "body": " Basis equivalence   Let be a tuple of vectors of . The following statements are equivalent.    is a basis of .    For all there is a unique linear combination of such that .       We prove both implications separately.   Implication: (2) (1)  If (2) holds, then in particular for all there is at least one linear combination of the vectors equal to . Thus . Furthermore, taking , condition (2) tells us that there is exactly one linear combination , which then must be the trivial linear combination ( , for all ). This proves is linearly independent. Since is a spanning set and is linear independent, it is a basis.    Implication: (1) (2)  Assume is a basis. Since spans , for every vector there is at least one linear combination as in . Let us show that this linear combination is unique. Suppose we have , where and for all but finitely many . After some vector arithmetic, we see that . Since is linearly independent, we conclude that , and thus for all . This shows there is a unique linear combination of the equal to .    "
},
{
  "id": "eg_basis_unique",
  "level": "2",
  "url": "s_basis.html#eg_basis_unique",
  "type": "Example",
  "number": "1.7.6",
  "title": "Unique basis representation.",
  "body": " Unique basis representation   By way of illustration, we use to show that the tuple , , is a basis of . This follows from the simple observation that an arbitrary matrix can be written as a linear combination of the in a unique way. Indeed, since for each , the matrix is the only matrix in this collection that has a nonzero -th entry, and since furthermore this entry is equal to , is the unique expression of as a linear combination of the . This proves that every element of can be written as a linear combination of the in a unique way, and hence that is a basis.   "
},
{
  "id": "proc_basis_onestep",
  "level": "2",
  "url": "s_basis.html#proc_basis_onestep",
  "type": "Procedure",
  "number": "1.7.7",
  "title": "One-step technique for bases.",
  "body": " One-step technique for bases   Let be a tuple of vectors of . To decide whether is a basis, proceed as follows.   Write out the vector equation , where is an arbitrary element of the vector space . (Typically you will give some parametric description of .)    Translate the vector equation into an equivalent linear system of equations in the unknowns .    If the system in (2) has a unique solution no matter what is chosen, then is a basis. If there is a choice of for which either the system in (2) has no solution ( , is inconsistent) or has infinitely many solutions, then is not a basis.      "
},
{
  "id": "eg_basis_onestep",
  "level": "2",
  "url": "s_basis.html#eg_basis_onestep",
  "type": "Example",
  "number": "1.7.8",
  "title": "One-step basis technique.",
  "body": " One-step basis technique   Use to decide whether is a basis of .    ,      ,           "
},
{
  "id": "proc_provide_basis",
  "level": "2",
  "url": "s_basis.html#proc_provide_basis",
  "type": "Procedure",
  "number": "1.7.9",
  "title": "By-inspection basis technique.",
  "body": " By-inspection basis technique   To produce a basis of a vector space  by inspection , proceed as follows.   Parametric description  Give a simple parametric description of the general element of .    Spanning set  If your parametric description is simple enough, you should be able to extract from it a natural spanning set of .    Linear independence  If your parametric description is free of redundancies, then will likely be linearly independent. Verify this using .      "
},
{
  "id": "eg_byinspection_R5",
  "level": "2",
  "url": "s_basis.html#eg_byinspection_R5",
  "type": "Example",
  "number": "1.7.10",
  "title": "By-inspection basis technique.",
  "body": " By-inspection basis technique   Use to compute a basis of the subspace defined as .    The two equations give two independent conditions on and , and no condition on . We see that the general element of can be described as for arbitrary scalars . It follows immediately that spans . Furthermore, using , we have for any scalars . Thus is linearly independent. We conclude is a basis.   "
},
{
  "id": "eg_byinspection_basis",
  "level": "2",
  "url": "s_basis.html#eg_byinspection_basis",
  "type": "Example",
  "number": "1.7.11",
  "title": "By-inspection basis technique.",
  "body": " By-inspection basis technique   Let be the subspace of all symmetric matrices. Use to compute a basis of .    We follow the three steps of .   A general symmetric matrix can be described parametrically as .    We have . It follows immediately that the tuple is a spanning set, where .    The expression tells us that . This proves is linearly independent.   Since is a linearly independent spanning set of , it is a basis of .   "
},
{
  "id": "d_tuple_length",
  "level": "2",
  "url": "s_basis.html#d_tuple_length",
  "type": "Definition",
  "number": "1.7.12",
  "title": "Length of a tuple.",
  "body": " Length of a tuple   Let be a tuple of elements of the set .   If is finite, with cardinality , then we say is finite and of length  , denoted .    If is infinite, then we say is infinite , or of infinite length , denoted .      "
},
{
  "id": "d_finite_dim",
  "level": "2",
  "url": "s_basis.html#d_finite_dim",
  "type": "Definition",
  "number": "1.7.13",
  "title": "Finite\/infinite dimension.",
  "body": " Finite\/infinite dimension   A vector space is finite dimensional if there is a finite basis of ; the vector space is infinite dimensional if there is no finite basis of . We write to indicate that is finite dimensional, and to indicate is infinite dimensional.   "
},
{
  "id": "ss_finite_dim-5",
  "level": "2",
  "url": "s_basis.html#ss_finite_dim-5",
  "type": "Remark",
  "number": "1.7.14",
  "title": "Finite\/infinite dimension.",
  "body": " Finite\/infinite dimension  In the next section we give a complete definition of the dimension of a vector space. For now we are content simply to distinguish between finite- and infinite-dimensional spaces.  "
},
{
  "id": "th_finite_spanning",
  "level": "2",
  "url": "s_basis.html#th_finite_spanning",
  "type": "Theorem",
  "number": "1.7.15",
  "title": "Finite spanning set.",
  "body": " Finite spanning set   Assume is a spanning set of the vector space of finite length . Any tuple of vectors of of length greater than (this includes infinite tuples) is linearly dependent. Equivalently, if is a linearly independent tuple of vectors of , then .    Axler provides a pleasant proof where one does not have to dirty one's hands with matrices. Personally, I enjoy digging in the dirt sometimes. In any case the argument below is a useful reminder about properties of linear systems.  First observe that it suffices to show that any finite tuple of length is linearly dependent, since if is an infinite tuple, then the subtuple is linearly dependent for any distinct list of indices . But then clearly the entire tuple is also linearly dependent since a nontrivial linear combination gives rise to a nontrivial linear combination of all of the vectors simply by setting for . (This argument shows that in general a tuple is linearly dependent if and only if some finite subtuple is linearly dependent.)  It remains to show that any tuple of of length is linearly dependent. Since is a spanning set of we may write, for each  where . We now show that there is a nontrivial linear combination . Indeed, we have . It follows that to produce a nontrivial linear combination of the equal to , it suffices to find a nonzero -tuple satisfying for all , or equivalently, a nonzero solution to the matrix equation , where . Since has more columns than rows ( ), our Gaussian elimination technique for solving such matrix equations gives rise to a free variable: row reduces to a matrix in row echelon form, one of whose columns does not have a leading one. The existence of a free variable in turn guarantees that there are infinitely many solutions to . In particular, there is some nontrivial solution . Our argument above implies that is then our desired nontrivial linear combination equal to .   "
},
{
  "id": "cor_finite_dim",
  "level": "2",
  "url": "s_basis.html#cor_finite_dim",
  "type": "Corollary",
  "number": "1.7.16",
  "title": "Infinite-dimensional spaces.",
  "body": " Infinite-dimensional spaces   A vector space is infinite dimensional if and only if it contains an infinite linearly independent tuple .    The proof is left as an exercise.   "
},
{
  "id": "d_subtuple",
  "level": "2",
  "url": "s_basis.html#d_subtuple",
  "type": "Definition",
  "number": "1.7.17",
  "title": "Subtuples.",
  "body": " Subtuples   Let be a tuple of elements of the set . Given a subset , we call the tuple a subtuple of .  Thinking in terms of functions, if is the tuple representation of the function , then the subtuple is the tuple representation of the restriction  of to .   "
},
{
  "id": "th_subtuples",
  "level": "2",
  "url": "s_basis.html#th_subtuples",
  "type": "Theorem",
  "number": "1.7.18",
  "title": "Independence and subtuples.",
  "body": " Independence and subtuples   Let be a tuple of vectors in . The following statements are equivalent.    is linearly independent.    Every subtuple of is linearly independent.    Every finite subtuple of is linearly independent.   As a consequence, is linearly dependent if and only if it has a finite linearly dependent subtuple.    The proof is left as an exercise.   "
},
{
  "id": "s_dimention",
  "level": "1",
  "url": "s_dimention.html",
  "type": "Section",
  "number": "1.8",
  "title": "Dimension",
  "body": " Dimension   Intuitively, we think of as a two-dimensional space, and as three-dimensional one. Why? Loosely speaking this notion of dimension has something to do with the number of degrees of freedom involved in specifying a particular element of the given space: to specify an element of we need to give its two coordinates; to specify an element of we need to give its three coordinates. Clearly, this conception is too imprecise to serve as a mathematical definition. What exactly does degrees of freedom mean? And how do you quantify the number of degrees of freedom needed for a given space? For example, we also think of a plane passing through the origin as a two-dimensional object; it is not immediately clear how to square this intuition with our vague degrees of freedom formulation. In this section we introduce the definition of the dimension of a vector space, which will be a rigorous expression of these notions. Our definition, which relies on the concept of bases, seems simple enough: the dimension of a vector space is defined as the number of elements contained in any basis of . However, as we will see there is considerable work involved (a) in proving that this definition is well-defined, and (b) in showing that it captures the intuition of dimension described above.    Definition and examples  In the previous section we differentiated between finite- and infinite-dimensional vector spaces. We now elaborate on this classification by assigning to a finite-dimensional vector space a specific integer value called its dimension .   Dimension    dimension of    Let be a vector space. The dimension of , denoted , is defined as follows:   If is infinite dimensional, then , as before.    If is finite dimensional, then we define to be the length of any basis of : , if is a basis of , then .        Is dimension well-defined?  The statement of is elegant in its simplicity, but a very serious question immediately arises: is this definition well defined? In other words, do any two bases of a vector space have the same length? Who's to say that a vector space cannot have one basis of length two and another of length 5: or worse, one basis that is finite and another that is infinite? As we will see shortly, any two bases of a finite-dimensional space do indeed have the same length. But first we illustrate our definition with some familiar examples.   By definition, to show a vector space has dimension , we must exhibit a basis with . Similarly, to show is infinite dimensional, we must show that it does not have a finite basis: or equivalently, using , we must produce an infinite linearly independent tuple. Let's codify this with a procedure.   Computing dimension   To compute the dimension of a vector space proceed as follows.   Basis  Attempt to produce a basis of , possibly with the help of the by-inspection basis technique .    Dimension     If you found a finite basis in Step 1, then determine the cardinality by counting the number of distinct elements of . We have in this case.      If you found an infinite linearly independent tuple in Step 1, or were able to show that no finite basis exists, then .          It is especially easy to carry out for a vector space when we have a basis at the ready. This is the case for our list of familiar vector spaces, each of which is equipped with a standard basis.   Dimensions of familiar spaces  For each below we provide its standard basis and compute .   Zero space  The empty tuple is a basis of . Thus .    Tuples  The tuple is a basis of . Thus .    Matrices  The tuple , , , is a basis of . Thus .    Polynomials of bounded degree  Let be an infinite subset of . The tuple is a basis of . Thus .    Polynomials  Let be an infinite subset of . The tuple is a basis of . Since is a linearly independent tuple, we see that .      Even when we do not have a standard basis at our disposal, there are many situations when we can produce a basis of a space by inspection, allowing us to then easily compute the dimension.   Dimension of subspace   Use to compute the dimension of the subspace defined as .    We saw in that is a basis of . Thus .     Dimension of symmetric matrices   Let be the space of symmetric matrices. Compute using . You may take for granted that is a subspace.    We saw in that is a basis of , where . We conclude that .      Theoretical facts about dimension  Having illustrated the definition at work with some familiar examples, we now get down to the business of showing that our definition of dimension is well-defined. The ensuing investigation will reveal a number of useful properties of dimension as it relates to bases and subspaces of vector spaces. Our first result not only ensures that our definition of dimension ( ) is well-defined, it also characterizes dimension as the minimal length of a spanning set, and the maximal length of a linearly independent tuple.   Basis bounds   Let be a basis of the vector space , and suppose . Let be a tuple of vectors of .   If spans , then .    If is linearly independent, then .    If is a basis for , then .          Suppose by contradiction that and . It follows from that is linearly dependent. Since this is a contradiction, we conclude that .    This also follows from : since is a spanning set of any of length greater than must be linearly dependent.    This follows from (1) and (2): if is a basis, then since spans, we have ; and since is linearly independent we have . We conclude that .       The contracting and expanding theorem below is very useful theoretical consequence of . It allows us to construct a customized basis starting from a given tuple . We will make heavy use of this theorem in our later theoretical developments.   Contracting and expanding   Let be a vector space of dimension , and let be a tuple of vectors of .   Contract to basis  If spans , then there is a subtuple of that is a basis of : , we can contract a spanning set to a basis.    Extend to basis  If is linearly independent, then is a subtuple of a basis of : , we can extend a linearly independent tuple to a basis.          Let and assume . We will assume that is finite: , . (We leave as a homework exercise the case where is infinite.) Since is finite, so too is the set of all subsets of : in fact, we have . It follows that there are different subtuples of . Let be the set of all subtuples of satisfying , and let be any element of of minimal length: , we have , and for any subtuple of with .  We claim that is linearly independent, and hence a basis of , as desired. We give a proof by contradiction. If were linearly dependent, then by , there is some index such that . But then the subtuple would satisfy and , contradicting the minimal length of . We conclude that must be linearly independent.    Assume is linearly independent. Since , we must have , and hence we can write for some . The procedure below constructs a sequence of tuples such that is a subtuple of for all and is a basis of .   Initialization  Let     Expansion loop  Suppose . If , return . Otherwise, define , where is any element of that is not contained in .   Some observations:   For all the tuple is linearly independent. This can be shown by induction, the crucial point being that if is linearly independent, then so is , precisely since . (This follows from .)    The procedure must halt. Why? Since , and since each is linearly independent, we must have for all by . Since , the procedure must halt in at most steps.   From (ii) we may assume the procedure halts at for some . From (i) we know that is linearly independent. Furthermore, since the procedure halts at , we know that . It follows that is a basis containing , as desired.       The following corollary follows from and . We call it a street smarts result as the first two statements give us a quick and dirty way of dashing a tuple's hopes of being a basis. The third statement asserts that when a finite set's cardinality matches the dimension of a space, then to prove it is a basis it suffices to prove either one of the two defining properties of .   Street smarts   Let be a vector space of dimension , and let be a tuple of vectors of .   If , then does not span .    If , then is linearly dependent.    If , then the following are equivalent:    is a basis.     spans .     is linearly independent.          Statements (1) and (2) follow directly from . Statement (3) is an easy consequence of . For example, if spans , then there is a subset of that is a basis of ; since all bases of have elements, and since , we must have ; thus is a basis. The proof for a linear independent set is similar, and is left to the reader.    We are often in a situation where we wish to show a given subspace of a vector space is in fact the entire space. For example, when deciding whether a set spans a vector space , we are asking whether is all of . As the next result illustrates, dimension is a very useful tool in this regard.   Dimension of subspaces   Let be a vector space.   If is a subspace, then .    If is a subspace, then if and only if .          Firstly, if , then clearly for any subspace .  Now assume . Apply the extend to a basis procedure described in the proof of to the empty list , which is linearly independent, considered as a tuple of vectors in . Since , and since , the linearly independent tuples must satisfy . Thus the procedure must halt with a basis of satisfying . We conclude that .    Clearly, if , then . For the other direction, assume . Let be a basis for . Since is linearly independent, it can be extended to a basis of ( ). Since , and since all bases of have cardinality , we must have . It follows that is also a basis of , and hence that .        Dimension of subspace   Let , where . Let be the space of symmetric matrices. Use and the fact that to prove that .       Since each is symmetric, and since the set of symmetric matrices is a subspace, we have by statement (2) of .    The set is linearly independent: . Thus is a basis of , and we conclude that .    We saw in that : , the space of symmetric is -dimensional. Since is a subspace of and , we conclude that by .        is also of use in situations where we wish to characterize all subspaces of a given -dimensional vector space . By the corollary, any such subspace must have dimension for some ; and this in turn means that must have a basis of cardinality . We thus have the beginnings of a systematic description of all subspaces , organized by dimension , for .   Subspaces of  We describe all subspaces of ordered by dimension.    If , then must have the empty list as a basis (by definition of dimension), and hence , the zero subspace.     If , then has a basis consisting of a single nonzero vector . In this case we have , which is a line passing through the origin with direction vector . Thus -dimensional subspaces of are lines passing through the origin.     If , then has a basis containing two non-parallel vectors in . You learn in multivariable calculus that is the plane in passing through the origin with direction vectors  . In fact, you can show that the cross product  is a normal vector for the plane in this case. Thus the -dimensional subspaces of are planes passing through the origin.     Assume . Since is a subspace of , and since , we must have according to . It is as simple as that! Thus is the only -dimensional subspace of .      Statement (1) of the next theorem is an excellent first example illustrating the power of our expand to a basis technique. As mentioned above, you will see this trick many times throughout the course.   Direct sums   Assume is a finite-dimensional vector space.   Given any subspace there is a subpace satisfying .    Let , where is a subspace of for all . The following statements are equivalent.    .     .      Given any subspace there is a subpace satisfying .    Assume . Given a subspace , we know that , and hence that has a finite basis for some . Since is linearly independent, it can be extended to a basis of . Define . We claim that .    That was quite a dose of theory! For your convenience, we collect the various results on dimension, together with their nicknames, in one omnibus theorem.   Dimension theory compendium   Let be a vector space of dimension , and let be a tuple of vectors of .   Street smarts  If , then does not span .    Street smarts  If , then is linearly dependent.    Street smarts  If , then is a basis if and only if spans if and only if is linearly independent.    Contract  If spans , then can be contracted to a basis of .    Expand  If is linearly independent, then can be extended to a basis of .    Dimension of subspaces  If is a subspace, then    , and     if and only if .       Existence of direct sums  Given any subspace , there is a subspace satisfying .    Dimension of direct sums  Given , where is a subspace of for all , we have .        "
},
{
  "id": "d_dimension",
  "level": "2",
  "url": "s_dimention.html#d_dimension",
  "type": "Definition",
  "number": "1.8.1",
  "title": "Dimension.",
  "body": " Dimension    dimension of    Let be a vector space. The dimension of , denoted , is defined as follows:   If is infinite dimensional, then , as before.    If is finite dimensional, then we define to be the length of any basis of : , if is a basis of , then .      "
},
{
  "id": "ss_dimension-4",
  "level": "2",
  "url": "s_dimention.html#ss_dimension-4",
  "type": "Remark",
  "number": "1.8.2",
  "title": "Is dimension well-defined?",
  "body": " Is dimension well-defined?  The statement of is elegant in its simplicity, but a very serious question immediately arises: is this definition well defined? In other words, do any two bases of a vector space have the same length? Who's to say that a vector space cannot have one basis of length two and another of length 5: or worse, one basis that is finite and another that is infinite? As we will see shortly, any two bases of a finite-dimensional space do indeed have the same length. But first we illustrate our definition with some familiar examples.  "
},
{
  "id": "proc_dimension",
  "level": "2",
  "url": "s_dimention.html#proc_dimension",
  "type": "Procedure",
  "number": "1.8.3",
  "title": "Computing dimension.",
  "body": " Computing dimension   To compute the dimension of a vector space proceed as follows.   Basis  Attempt to produce a basis of , possibly with the help of the by-inspection basis technique .    Dimension     If you found a finite basis in Step 1, then determine the cardinality by counting the number of distinct elements of . We have in this case.      If you found an infinite linearly independent tuple in Step 1, or were able to show that no finite basis exists, then .         "
},
{
  "id": "eg_dimension_familiar",
  "level": "2",
  "url": "s_dimention.html#eg_dimension_familiar",
  "type": "Example",
  "number": "1.8.4",
  "title": "Dimensions of familiar spaces.",
  "body": " Dimensions of familiar spaces  For each below we provide its standard basis and compute .   Zero space  The empty tuple is a basis of . Thus .    Tuples  The tuple is a basis of . Thus .    Matrices  The tuple , , , is a basis of . Thus .    Polynomials of bounded degree  Let be an infinite subset of . The tuple is a basis of . Thus .    Polynomials  Let be an infinite subset of . The tuple is a basis of . Since is a linearly independent tuple, we see that .     "
},
{
  "id": "eg_dim_R5",
  "level": "2",
  "url": "s_dimention.html#eg_dim_R5",
  "type": "Example",
  "number": "1.8.5",
  "title": "Dimension of subspace.",
  "body": " Dimension of subspace   Use to compute the dimension of the subspace defined as .    We saw in that is a basis of . Thus .   "
},
{
  "id": "eg_dim_symm",
  "level": "2",
  "url": "s_dimention.html#eg_dim_symm",
  "type": "Example",
  "number": "1.8.6",
  "title": "Dimension of symmetric matrices.",
  "body": " Dimension of symmetric matrices   Let be the space of symmetric matrices. Compute using . You may take for granted that is a subspace.    We saw in that is a basis of , where . We conclude that .   "
},
{
  "id": "th_basis_dimension",
  "level": "2",
  "url": "s_dimention.html#th_basis_dimension",
  "type": "Theorem",
  "number": "1.8.7",
  "title": "Basis bounds.",
  "body": " Basis bounds   Let be a basis of the vector space , and suppose . Let be a tuple of vectors of .   If spans , then .    If is linearly independent, then .    If is a basis for , then .          Suppose by contradiction that and . It follows from that is linearly dependent. Since this is a contradiction, we conclude that .    This also follows from : since is a spanning set of any of length greater than must be linearly dependent.    This follows from (1) and (2): if is a basis, then since spans, we have ; and since is linearly independent we have . We conclude that .      "
},
{
  "id": "th_basis_contract_expand",
  "level": "2",
  "url": "s_dimention.html#th_basis_contract_expand",
  "type": "Theorem",
  "number": "1.8.8",
  "title": "Contracting and expanding.",
  "body": " Contracting and expanding   Let be a vector space of dimension , and let be a tuple of vectors of .   Contract to basis  If spans , then there is a subtuple of that is a basis of : , we can contract a spanning set to a basis.    Extend to basis  If is linearly independent, then is a subtuple of a basis of : , we can extend a linearly independent tuple to a basis.          Let and assume . We will assume that is finite: , . (We leave as a homework exercise the case where is infinite.) Since is finite, so too is the set of all subsets of : in fact, we have . It follows that there are different subtuples of . Let be the set of all subtuples of satisfying , and let be any element of of minimal length: , we have , and for any subtuple of with .  We claim that is linearly independent, and hence a basis of , as desired. We give a proof by contradiction. If were linearly dependent, then by , there is some index such that . But then the subtuple would satisfy and , contradicting the minimal length of . We conclude that must be linearly independent.    Assume is linearly independent. Since , we must have , and hence we can write for some . The procedure below constructs a sequence of tuples such that is a subtuple of for all and is a basis of .   Initialization  Let     Expansion loop  Suppose . If , return . Otherwise, define , where is any element of that is not contained in .   Some observations:   For all the tuple is linearly independent. This can be shown by induction, the crucial point being that if is linearly independent, then so is , precisely since . (This follows from .)    The procedure must halt. Why? Since , and since each is linearly independent, we must have for all by . Since , the procedure must halt in at most steps.   From (ii) we may assume the procedure halts at for some . From (i) we know that is linearly independent. Furthermore, since the procedure halts at , we know that . It follows that is a basis containing , as desired.      "
},
{
  "id": "cor_street_smarts",
  "level": "2",
  "url": "s_dimention.html#cor_street_smarts",
  "type": "Corollary",
  "number": "1.8.9",
  "title": "Street smarts.",
  "body": " Street smarts   Let be a vector space of dimension , and let be a tuple of vectors of .   If , then does not span .    If , then is linearly dependent.    If , then the following are equivalent:    is a basis.     spans .     is linearly independent.          Statements (1) and (2) follow directly from . Statement (3) is an easy consequence of . For example, if spans , then there is a subset of that is a basis of ; since all bases of have elements, and since , we must have ; thus is a basis. The proof for a linear independent set is similar, and is left to the reader.   "
},
{
  "id": "cor_dimension_subspace",
  "level": "2",
  "url": "s_dimention.html#cor_dimension_subspace",
  "type": "Corollary",
  "number": "1.8.10",
  "title": "Dimension of subspaces.",
  "body": " Dimension of subspaces   Let be a vector space.   If is a subspace, then .    If is a subspace, then if and only if .          Firstly, if , then clearly for any subspace .  Now assume . Apply the extend to a basis procedure described in the proof of to the empty list , which is linearly independent, considered as a tuple of vectors in . Since , and since , the linearly independent tuples must satisfy . Thus the procedure must halt with a basis of satisfying . We conclude that .    Clearly, if , then . For the other direction, assume . Let be a basis for . Since is linearly independent, it can be extended to a basis of ( ). Since , and since all bases of have cardinality , we must have . It follows that is also a basis of , and hence that .      "
},
{
  "id": "eg_subspace_dimension",
  "level": "2",
  "url": "s_dimention.html#eg_subspace_dimension",
  "type": "Example",
  "number": "1.8.11",
  "title": "Dimension of subspace.",
  "body": " Dimension of subspace   Let , where . Let be the space of symmetric matrices. Use and the fact that to prove that .       Since each is symmetric, and since the set of symmetric matrices is a subspace, we have by statement (2) of .    The set is linearly independent: . Thus is a basis of , and we conclude that .    We saw in that : , the space of symmetric is -dimensional. Since is a subspace of and , we conclude that by .      "
},
{
  "id": "eg_subspaces_R3",
  "level": "2",
  "url": "s_dimention.html#eg_subspaces_R3",
  "type": "Example",
  "number": "1.8.12",
  "title": "Subspaces of <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Subspaces of  We describe all subspaces of ordered by dimension.    If , then must have the empty list as a basis (by definition of dimension), and hence , the zero subspace.     If , then has a basis consisting of a single nonzero vector . In this case we have , which is a line passing through the origin with direction vector . Thus -dimensional subspaces of are lines passing through the origin.     If , then has a basis containing two non-parallel vectors in . You learn in multivariable calculus that is the plane in passing through the origin with direction vectors  . In fact, you can show that the cross product  is a normal vector for the plane in this case. Thus the -dimensional subspaces of are planes passing through the origin.     Assume . Since is a subspace of , and since , we must have according to . It is as simple as that! Thus is the only -dimensional subspace of .     "
},
{
  "id": "th_direct_sum_dim",
  "level": "2",
  "url": "s_dimention.html#th_direct_sum_dim",
  "type": "Theorem",
  "number": "1.8.13",
  "title": "Direct sums.",
  "body": " Direct sums   Assume is a finite-dimensional vector space.   Given any subspace there is a subpace satisfying .    Let , where is a subspace of for all . The following statements are equivalent.    .     .      Given any subspace there is a subpace satisfying .    Assume . Given a subspace , we know that , and hence that has a finite basis for some . Since is linearly independent, it can be extended to a basis of . Define . We claim that .   "
},
{
  "id": "th_dimension_compendium",
  "level": "2",
  "url": "s_dimention.html#th_dimension_compendium",
  "type": "Theorem",
  "number": "1.8.14",
  "title": "Dimension theory compendium.",
  "body": " Dimension theory compendium   Let be a vector space of dimension , and let be a tuple of vectors of .   Street smarts  If , then does not span .    Street smarts  If , then is linearly dependent.    Street smarts  If , then is a basis if and only if spans if and only if is linearly independent.    Contract  If spans , then can be contracted to a basis of .    Expand  If is linearly independent, then can be extended to a basis of .    Dimension of subspaces  If is a subspace, then    , and     if and only if .       Existence of direct sums  Given any subspace , there is a subspace satisfying .    Dimension of direct sums  Given , where is a subspace of for all , we have .      "
},
{
  "id": "s_transformation",
  "level": "1",
  "url": "s_transformation.html",
  "type": "Section",
  "number": "1.9",
  "title": "Linear transformations",
  "body": " Linear transformations   As detailed in a linear transformation is a special type of function between two vector spaces: one that respects in some sense the vector operations of both spaces.  This manner of theorizing is typical in mathematics: first we introduce a special class of objects defined axiomatically, then we introduce special functions or maps between these objects. Since the original objects of study (e.g. vector spaces) come equipped with special structural properties (e.g. vector operations), the functions we wish to study are the ones that somehow acknowledge this structure.  You have already seen this principle at work in your study of calculus. First we give some structure by defining a notion of proximity (i.e., is close to if is small), then we introduce a special family of functions that somehow respects this structure: these are precisely the continuous functions!  As you will see, linear transformations are not just interesting objects of study in their own right, they also serve as invaluable tools in our continued exploration of the intrinsic properties of vector spaces.  In the meantime rejoice in the fact that we can now give a succinct definition of linear algebra: it is the theory of vector spaces and the linear transformations between them. Go shout it from the rooftops!    Definition and examples   Linear transformation   Let and be -vector spaces. A linear transformation from to is a function satisfying the following properties.    for all .     for all and .   We let denote the set of all linear transformations from to : , .     Linear transformations  So what exactly do we mean when we say that a linear transformation respects the vector space structures? In plain English, the two axioms defining a linear transformation read as follows: the image of a sum is the sum of the images, and the image of a scalar multiple is the scalar multiple of the image. Alternatively, we could say that the application of a linear transformation to input vectors distributes over vector addition and scalar multiplication.   Before getting to examples of linear transformations, it will perhaps be enlightening to consider how a function between two vector spaces could fail to be a linear transformation. is an attempt at visualizing what it means for a function could fail one of the two linear transformation axioms. We will often fall back on these types of conceptual visualizations as a means of organizing our thinking about linear transformations.    Visualizing the failure of linear transformation axioms     fails Axiom : .         fails Axiom : .   T fails axiom ii         A nonlinear example   Let be defined as .   Does satisfy Axiom ? If so, prove it. Otherwise, give an explicit counterexample.    Does satisfy Axiom ? If so, prove it. Otherwise, give an explicit counterexample.           does not satisfy Axiom . Let and . We have . We thus see that .     does not satisfy Axiom . Let and . We have . We thus see that .        Notational quirk   brings to light a notational quirk when dealing with functions of the form . Technically speaking, given an input we should write . And yet our inner aesthete cries out at the unnecessary nested parentheses, and pleads that the notational laws be relaxed in this specific setting. We shall make it so.    Parentheses shall be dropped   In the special case where the domain of function is a subset of , then given input we may write for .    We now turn to functions that do satisfy the linear transformation axioms. As our first examples of linear transformations, we define zero transformations and identity transformations .   Zero, identity, and scaling transformations   Let and be vector spaces.   Zero transformation  The zero transformation from to , denoted , is defined as follows: . In other words, is the function that maps all elements of to the zero vector of .    Identity transformation  The identity transformation of , denoted , is defined as follows: . In other words, for all . When the underlying vector space is clear from the context, we will drop the subscript and write for .    Dilation (or scaling transformation)  Let be a fixed scalar. The function is called a dilation (or scaling transformation ) with scaling factor  .  Observe that since for all , we have .        Zero, identity, and scaling transformations   Let and be vector spaces.   The zero transformation is a linear transformation.    For all scalars the dilation is a linear transformation. In particular, is a linear transformation.          Let be the zero function. We verify each defining property separately.   Given , we have .    Given and , we have .   This proves that is a linear transformation.    Fix a scalar and let be the scaling transformation defined as for all .   Given , we have .    Given and , we have .   This proves that is a linear transformation.        Basic properties of linear transformations   Let be a linear transformation.   We have . In other words, maps the zero vector of to the zero vector of .    For all , we have .    Let be a tuple of vectors of . Given any linear combination of the , we have .          We employ some similar trickery to what was done in the proof of . Assuming is linear: . Thus, whatever may be, it satisfies . Canceling on both sides using , we conclude .    The argument is similar: . Since , adding to both sides of the equation yields .    Recall that by definition that there is a subset such that for all , in which case we have we can write . An easy induction argument on , using the two defining properties of a linear transformation, shows that . Since for all , we have , as desired.        Transformations distribute over combinations   Statement of combines and extends our distributive interpretations of . It says that the application of a linear transformation distributes over arbitrary linear combinations of vectors.     Interesting examples  As a sort of converse to statement of , observe that if satisfies for all and , then is linear. Indeed, taking the special case yields Axiom of ; and choosing yields Axiom of . As a consequence, we have the following one-step procedure for proving whether a function between vector spaces is a linear transformation.   One-step technique for transformations   Let be a function between vector spaces. To prove is a linear transformation, show that for all scalars and all vectors .    Next we introduce an extremely important family of linear transformations: any matrix has associated to it a linear transformation called a matrix transformation .   Matrix transformations    the matrix transformation associated to     Let . The matrix transformation associated to is the function defined as for all . We call the standard matrix of .     Matrix transformation  Observe how comes into play in the definition of : given a tuple , in order to make sense of the expression , we must think of as the column vector .    Matrix transformation   Let . Prove that is a linear transformation.    We use the 1-step technique. As you will see the proof follows directly from elementary properties of matrix multiplication. Given any and , we have .     Matrix transpose   Define as : , is the transpose operation. Prove that is a linear transformation.    The linearity of follows from elementary properties of the transpose operator. Using the one-step technique, for any and scalars , we have . This proves is linear.     Differentiation   Let be an interval of . Prove that is a linear transformation.    The linearity of follows from elementary properties of differentiation. We use the one-step technique. For any and scalars , we have . This proves is linear.     Integration   Let be a closed interval of . Prove that the function is a linear transformation.    Similarly to the above examples, the linearity of follows from familiar properties of the integral: for all and , we have .     Function evaluation   Let be a nonempty set, and let a list of elements of . Prove that the function is a linear transformation.    For all and scalars , we have .     Shift transformations   Prove that the functions and defined as are linear transformations.    We prove that is a linear transformation, leaving the proof for to the reader. Using tuple notation, we have . Thus, for any tuples and scalars , we have .     Projection onto summand   Let be a direct sum decomposition of the vector space . For all , we define via the following recipe:   given , there is a unique expression , where for all ;    define .   The function is a linear transformation. We call the projection onto  operator.    Let . Observe first that is well-defined precisely because the expression is unique by the definition ( ).  We will show that is linear using the 1-step technique. Given we can write , where for all . Note that by definition of we have . For any , we then have . Since each is a subspace, we have , and thus this is the unique decomposition of the vector in terms of the . We conclude that , as desired.      Transformations and bases   Transformations and bases   Let and be vector spaces, and let be a basis of .   Give linear transformations , we have if and only if for all .    Given any tuple of vectors of , there is a linear transformation satisfying for all . Furthermore, as a consequence of (1), this linear transformation is unique.       We assume is a basis of .   Assume and that for all . Since is a basis, given any we can write as a linear combination for some , in which case we have . We have shown that for all . By definition, this means that .    Given a tuple of vectors of , the following recipe defines a function :   given , write as a linear combination of the vectors ;    define .   We need to address two details of this recipe in order to convince ourselves that this determines a well-defined function . Firstly, since is a basis, the coefficients in the linear combination are uniquely determined by , making the value uniquely determined. Secondly, observe that since for all but finitely many , the expression is a (finite) linear combination of vectors, and thus defines an element of .  From our definition of it follows that for all . Indeed, to compute following our recipe, we write as a linear combination of the elements of , whence it follows that .  Lastly, we must show that is linear using the 1-step technique. Given and scalars , write as linear combinations of the , and then compute .        Transformations and bases  The two statements of deserve some elaboration and interpretation.   The first statement tells us that a linear transformation is uniqueley determined by its values for any basis . In other words, if you know that is linear, and you know where it sends each element of a basis, then you know completeley! Put another way, a linear transformation is uniquely determined by its action on any given basis.    Consisder the second statement as a powerful transformation building result. In more detail, it says the following: given a basis of , given any choice of values , there is a unique linear transformation that sends to for all .       Matrix transformations   Let be a linear transformation. There is a unique matrix such that . In particular, all linear transformations from to are matrix transformations.    The proof is left as an exercise.      as a vector space  We end this section by providing a vector space structure to the set of all linear transformations from to . As in , we state the result as a definition with proof.   Space of linear transformations   Let and be vector spaces. Below we define a vector space structure on .   Vector operations  Given linear transformations and scalar , we define linear transformations as follows: .    Zero vector  The zero vector of is the zero transformation defined as for all .    Vector inverses  Given a linear transformation , its vector inverse is the linear transformation defined as for all .   We call , together with these vector operations, the space of linear transformations from to .     The proof is left as an exercises. Note that before verifying the vector space axioms (i)-(viii) you must first verify that the given operations are well-defined: , you must show that if and are linear transformations from to , then so are the functions and .    "
},
{
  "id": "d_transformation",
  "level": "2",
  "url": "s_transformation.html#d_transformation",
  "type": "Definition",
  "number": "1.9.1",
  "title": "Linear transformation.",
  "body": " Linear transformation   Let and be -vector spaces. A linear transformation from to is a function satisfying the following properties.    for all .     for all and .   We let denote the set of all linear transformations from to : , .   "
},
{
  "id": "rm_lin_trans",
  "level": "2",
  "url": "s_transformation.html#rm_lin_trans",
  "type": "Remark",
  "number": "1.9.2",
  "title": "Linear transformations.",
  "body": " Linear transformations  So what exactly do we mean when we say that a linear transformation respects the vector space structures? In plain English, the two axioms defining a linear transformation read as follows: the image of a sum is the sum of the images, and the image of a scalar multiple is the scalar multiple of the image. Alternatively, we could say that the application of a linear transformation to input vectors distributes over vector addition and scalar multiplication.  "
},
{
  "id": "fig_nonlinear",
  "level": "2",
  "url": "s_transformation.html#fig_nonlinear",
  "type": "Figure",
  "number": "1.9.3",
  "title": "",
  "body": " Visualizing the failure of linear transformation axioms     fails Axiom : .         fails Axiom : .   T fails axiom ii       "
},
{
  "id": "eg_nonlinear",
  "level": "2",
  "url": "s_transformation.html#eg_nonlinear",
  "type": "Example",
  "number": "1.9.4",
  "title": "A nonlinear example.",
  "body": " A nonlinear example   Let be defined as .   Does satisfy Axiom ? If so, prove it. Otherwise, give an explicit counterexample.    Does satisfy Axiom ? If so, prove it. Otherwise, give an explicit counterexample.           does not satisfy Axiom . Let and . We have . We thus see that .     does not satisfy Axiom . Let and . We have . We thus see that .      "
},
{
  "id": "ss_transformations_def-7",
  "level": "2",
  "url": "s_transformation.html#ss_transformations_def-7",
  "type": "Remark",
  "number": "1.9.5",
  "title": "Notational quirk.",
  "body": " Notational quirk   brings to light a notational quirk when dealing with functions of the form . Technically speaking, given an input we should write . And yet our inner aesthete cries out at the unnecessary nested parentheses, and pleads that the notational laws be relaxed in this specific setting. We shall make it so.  "
},
{
  "id": "fiat_paren_drop",
  "level": "2",
  "url": "s_transformation.html#fiat_paren_drop",
  "type": "Fiat",
  "number": "1.9.6",
  "title": "Parentheses shall be dropped.",
  "body": " Parentheses shall be dropped   In the special case where the domain of function is a subset of , then given input we may write for .   "
},
{
  "id": "d_transform_zero_identity",
  "level": "2",
  "url": "s_transformation.html#d_transform_zero_identity",
  "type": "Definition",
  "number": "1.9.7",
  "title": "Zero, identity, and scaling transformations.",
  "body": " Zero, identity, and scaling transformations   Let and be vector spaces.   Zero transformation  The zero transformation from to , denoted , is defined as follows: . In other words, is the function that maps all elements of to the zero vector of .    Identity transformation  The identity transformation of , denoted , is defined as follows: . In other words, for all . When the underlying vector space is clear from the context, we will drop the subscript and write for .    Dilation (or scaling transformation)  Let be a fixed scalar. The function is called a dilation (or scaling transformation ) with scaling factor  .  Observe that since for all , we have .      "
},
{
  "id": "th_transform_zero_identity_scaling",
  "level": "2",
  "url": "s_transformation.html#th_transform_zero_identity_scaling",
  "type": "Theorem",
  "number": "1.9.8",
  "title": "Zero, identity, and scaling transformations.",
  "body": " Zero, identity, and scaling transformations   Let and be vector spaces.   The zero transformation is a linear transformation.    For all scalars the dilation is a linear transformation. In particular, is a linear transformation.          Let be the zero function. We verify each defining property separately.   Given , we have .    Given and , we have .   This proves that is a linear transformation.    Fix a scalar and let be the scaling transformation defined as for all .   Given , we have .    Given and , we have .   This proves that is a linear transformation.      "
},
{
  "id": "th_transform_basic_props",
  "level": "2",
  "url": "s_transformation.html#th_transform_basic_props",
  "type": "Theorem",
  "number": "1.9.9",
  "title": "Basic properties of linear transformations.",
  "body": " Basic properties of linear transformations   Let be a linear transformation.   We have . In other words, maps the zero vector of to the zero vector of .    For all , we have .    Let be a tuple of vectors of . Given any linear combination of the , we have .          We employ some similar trickery to what was done in the proof of . Assuming is linear: . Thus, whatever may be, it satisfies . Canceling on both sides using , we conclude .    The argument is similar: . Since , adding to both sides of the equation yields .    Recall that by definition that there is a subset such that for all , in which case we have we can write . An easy induction argument on , using the two defining properties of a linear transformation, shows that . Since for all , we have , as desired.      "
},
{
  "id": "rm_transform_dist",
  "level": "2",
  "url": "s_transformation.html#rm_transform_dist",
  "type": "Remark",
  "number": "1.9.10",
  "title": "Transformations distribute over combinations.",
  "body": " Transformations distribute over combinations   Statement of combines and extends our distributive interpretations of . It says that the application of a linear transformation distributes over arbitrary linear combinations of vectors.  "
},
{
  "id": "proc_transform_onestep",
  "level": "2",
  "url": "s_transformation.html#proc_transform_onestep",
  "type": "Procedure",
  "number": "1.9.11",
  "title": "One-step technique for transformations.",
  "body": " One-step technique for transformations   Let be a function between vector spaces. To prove is a linear transformation, show that for all scalars and all vectors .   "
},
{
  "id": "d_matrix_transform",
  "level": "2",
  "url": "s_transformation.html#d_matrix_transform",
  "type": "Definition",
  "number": "1.9.12",
  "title": "Matrix transformations.",
  "body": " Matrix transformations    the matrix transformation associated to     Let . The matrix transformation associated to is the function defined as for all . We call the standard matrix of .   "
},
{
  "id": "ss_transform_interesting-6",
  "level": "2",
  "url": "s_transformation.html#ss_transform_interesting-6",
  "type": "Remark",
  "number": "1.9.13",
  "title": "Matrix transformation.",
  "body": " Matrix transformation  Observe how comes into play in the definition of : given a tuple , in order to make sense of the expression , we must think of as the column vector .  "
},
{
  "id": "eg_matrix_transformation",
  "level": "2",
  "url": "s_transformation.html#eg_matrix_transformation",
  "type": "Example",
  "number": "1.9.14",
  "title": "Matrix transformation.",
  "body": " Matrix transformation   Let . Prove that is a linear transformation.    We use the 1-step technique. As you will see the proof follows directly from elementary properties of matrix multiplication. Given any and , we have .   "
},
{
  "id": "eg_transposition",
  "level": "2",
  "url": "s_transformation.html#eg_transposition",
  "type": "Example",
  "number": "1.9.15",
  "title": "Matrix transpose.",
  "body": " Matrix transpose   Define as : , is the transpose operation. Prove that is a linear transformation.    The linearity of follows from elementary properties of the transpose operator. Using the one-step technique, for any and scalars , we have . This proves is linear.   "
},
{
  "id": "eg_diff_linear",
  "level": "2",
  "url": "s_transformation.html#eg_diff_linear",
  "type": "Example",
  "number": "1.9.16",
  "title": "Differentiation.",
  "body": " Differentiation   Let be an interval of . Prove that is a linear transformation.    The linearity of follows from elementary properties of differentiation. We use the one-step technique. For any and scalars , we have . This proves is linear.   "
},
{
  "id": "eg_integration_trans",
  "level": "2",
  "url": "s_transformation.html#eg_integration_trans",
  "type": "Example",
  "number": "1.9.17",
  "title": "Integration.",
  "body": " Integration   Let be a closed interval of . Prove that the function is a linear transformation.    Similarly to the above examples, the linearity of follows from familiar properties of the integral: for all and , we have .   "
},
{
  "id": "eg_evaluation_trans",
  "level": "2",
  "url": "s_transformation.html#eg_evaluation_trans",
  "type": "Example",
  "number": "1.9.18",
  "title": "Function evaluation.",
  "body": " Function evaluation   Let be a nonempty set, and let a list of elements of . Prove that the function is a linear transformation.    For all and scalars , we have .   "
},
{
  "id": "eg_shift_transform",
  "level": "2",
  "url": "s_transformation.html#eg_shift_transform",
  "type": "Example",
  "number": "1.9.19",
  "title": "Shift transformations.",
  "body": " Shift transformations   Prove that the functions and defined as are linear transformations.    We prove that is a linear transformation, leaving the proof for to the reader. Using tuple notation, we have . Thus, for any tuples and scalars , we have .   "
},
{
  "id": "th_transformation_projection",
  "level": "2",
  "url": "s_transformation.html#th_transformation_projection",
  "type": "Theorem",
  "number": "1.9.20",
  "title": "Projection onto summand.",
  "body": " Projection onto summand   Let be a direct sum decomposition of the vector space . For all , we define via the following recipe:   given , there is a unique expression , where for all ;    define .   The function is a linear transformation. We call the projection onto  operator.    Let . Observe first that is well-defined precisely because the expression is unique by the definition ( ).  We will show that is linear using the 1-step technique. Given we can write , where for all . Note that by definition of we have . For any , we then have . Since each is a subspace, we have , and thus this is the unique decomposition of the vector in terms of the . We conclude that , as desired.   "
},
{
  "id": "th_trans_basis",
  "level": "2",
  "url": "s_transformation.html#th_trans_basis",
  "type": "Theorem",
  "number": "1.9.21",
  "title": "Transformations and bases.",
  "body": " Transformations and bases   Let and be vector spaces, and let be a basis of .   Give linear transformations , we have if and only if for all .    Given any tuple of vectors of , there is a linear transformation satisfying for all . Furthermore, as a consequence of (1), this linear transformation is unique.       We assume is a basis of .   Assume and that for all . Since is a basis, given any we can write as a linear combination for some , in which case we have . We have shown that for all . By definition, this means that .    Given a tuple of vectors of , the following recipe defines a function :   given , write as a linear combination of the vectors ;    define .   We need to address two details of this recipe in order to convince ourselves that this determines a well-defined function . Firstly, since is a basis, the coefficients in the linear combination are uniquely determined by , making the value uniquely determined. Secondly, observe that since for all but finitely many , the expression is a (finite) linear combination of vectors, and thus defines an element of .  From our definition of it follows that for all . Indeed, to compute following our recipe, we write as a linear combination of the elements of , whence it follows that .  Lastly, we must show that is linear using the 1-step technique. Given and scalars , write as linear combinations of the , and then compute .      "
},
{
  "id": "ss_transformations_bases-3",
  "level": "2",
  "url": "s_transformation.html#ss_transformations_bases-3",
  "type": "Remark",
  "number": "1.9.22",
  "title": "Transformations and bases.",
  "body": " Transformations and bases  The two statements of deserve some elaboration and interpretation.   The first statement tells us that a linear transformation is uniqueley determined by its values for any basis . In other words, if you know that is linear, and you know where it sends each element of a basis, then you know completeley! Put another way, a linear transformation is uniquely determined by its action on any given basis.    Consisder the second statement as a powerful transformation building result. In more detail, it says the following: given a basis of , given any choice of values , there is a unique linear transformation that sends to for all .     "
},
{
  "id": "cor_matrix_transformation",
  "level": "2",
  "url": "s_transformation.html#cor_matrix_transformation",
  "type": "Corollary",
  "number": "1.9.23",
  "title": "Matrix transformations.",
  "body": " Matrix transformations   Let be a linear transformation. There is a unique matrix such that . In particular, all linear transformations from to are matrix transformations.    The proof is left as an exercise.   "
},
{
  "id": "d_linear_transformations",
  "level": "2",
  "url": "s_transformation.html#d_linear_transformations",
  "type": "Definition",
  "number": "1.9.24",
  "title": "Space of linear transformations.",
  "body": " Space of linear transformations   Let and be vector spaces. Below we define a vector space structure on .   Vector operations  Given linear transformations and scalar , we define linear transformations as follows: .    Zero vector  The zero vector of is the zero transformation defined as for all .    Vector inverses  Given a linear transformation , its vector inverse is the linear transformation defined as for all .   We call , together with these vector operations, the space of linear transformations from to .   "
},
{
  "id": "ss_vs_of_lin_transformations-4",
  "level": "2",
  "url": "s_transformation.html#ss_vs_of_lin_transformations-4",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " The proof is left as an exercises. Note that before verifying the vector space axioms (i)-(viii) you must first verify that the given operations are well-defined: , you must show that if and are linear transformations from to , then so are the functions and .  "
},
{
  "id": "s_null_image",
  "level": "1",
  "url": "s_null_image.html",
  "type": "Section",
  "number": "1.10",
  "title": "Null space and image",
  "body": " Null space and image   Having introduced linear transformations, we now begin to investigate them as important mathematical objects in their own right. In this section we introduce two subspaces associated to a linear transformation that will aid this investigation. These are the null space and image of a transformation.    Definition and examples   Null space and image   Let be a linear transformation.   Null space of  The null space of is the subset of defined as .    Image of  The image (or range ) of is the subset of defined as .        Null space and image  We gather a few simple observations about the null space and image of a linear map    Let . It is useful to keep in mind where and  live in this picture: we have and . In other words, the null space is a subset of the domain, and the image is a subset of the codomain. See .    Note that the image of a linear transformation is just its image when considered simply as a function of sets. (See .)    The notion of a null space is analogous to the set of zeros (or roots) of a real-valued function , , and the zeros of is a useful English shorthand for . However, there is an important difference between the null space of a linear transformation and the zeros of an arbitrary real-valued function: the null space of a linear transformation comes with the added structure of a vector space ( ), whereas the zeros of an arbitrary function in general do not.  The same observation can be made about the image of a linear transformation ( ), in comparison to the image of an arbitrary function.       Null space and image  Null space and image     Null space lives in the domain; image lives in the codomain.         The entire null space gets mapped to .         The entire domain is mapped to .         Before getting to examples we make official what we hinted at above: the null space and image of a linear transformation are subspaces.   Null space and image   If is a linear transformation, then is a subspace of , and is a subspace of .     Null space of  We use the two-step technique to prove is a subspace.   Since ( ), we see that .    Suppose . Given any , we have . This shows that , completing our proof.       Image of  The proof proceeds in a similar manner, using the two-step technique.   Since ( ), we see that is hit by , and hence is a member of .    Assume vectors are elements of . By definition, this means there are vectors such that for . Now given any linear combination , we have . This shows that for any linear combination , there is an element such that . We conclude that if , then for any , as desired.          Define as .   Prove that is linear.    Identify as a familiar matrix subspace.    Identify as a familiar matrix subspace.          Linearity is an easy consequence of transpose properties. For any and , we have .  Alternatively, since we already showed that the transpose operator is linear on , and since , it follows that is linear.    We have . Thus is the subspace of symmetric matrices!    Let , subspace of skew-symmetric matrices. We claim . As this is a set equality, we prove it by showing the two set inclusions and . (See )  The inclusion is the easier of the two. If , then for some . Using various properties of transposition, we have , showing that is skew-symmetric, and thus , as desired.  The inclusion is trickier: we must show that if is skew-symmetric, then there is an such that . Assume we have a with . Letting we have . Thus we have found a matrix satisfying . It follows that .        Differential operator   Let be a closed finite interval of . Define as .   Identify as a familiar function subspace.    Identify as a familiar function subspace.          By definition, we have . From calculus, we know that for all if and only if is a constant function. Thus $\\NS T$ is the set of all constant functions on .    By definition . Equivalently, using some calculus terminology, is the set of continuous functions on that have an antiderivative . It follows from the fundamental theorem of calculus that in fact all continuous function on have an antiderivative. Thus .       As illustrated by , provides an alternative technique for proving that a subset of is in fact a subspace: namely, find a linear transformation such that . Let's codify this in the form of a procedure.   Subspaces as null space   Let be a vector space, and let be a subset of . The following procedure provides an indirect way of proving that is a subspace of .   Produce a linear transformation .    Show that .        Polynomial evaluation   Show that is a subspace of using .    We make use of the evaluation linear transformations introduced earlier. Define the linear transformations . We see that if and only if , or equivalently, if and only if . Thus , the null space of the linear transformation . It follows that is a linear transformation.     Homogeneous linear differential equation   Let be an interval of , let be continuous functions on ( , ) for all , and define as the set of functions satisfying the linear homogeneous differential equation . Prove that is a subspace of .    Define as . We have , showing that is a linear transformation. The set of solutions to is precisely , making this set a subspace of .     Matrix transformation   Let be an matrix, and let be the columns of , considered as elements of . Show that the null space and image of the corresponding matrix transformation can be identified with the following fundamental spaces of : .    For the null space, we have . The statment about follows from the following observation about matrix equations: we can solve if and only if can be expressed as a linear combination of the columns of . (This observation, in turn, follows from the column method description of matrix multiplication .) Taking this for granted, we then have .      Injective, surjective, bijective  As with any function, one thing we wish to be able to determine about a linear transformation is whether it is injective , surjective , and bijective . The theorem below describes how and answer these questions for us.   Injective, surjective, bijective   Let be a linear transformation.    is injective if and only if .     is surjective if and only if .     is bijective if and only if and .          We prove both implications separately.  First observe that if , then , since . Thus, if is injective, then we have . It follows that .  Now assume that . Given , we have . We conclude that is injective in this case.    This is a purely set-theoretic result.    This is an elementary consequence of (1) and (2).        "
},
{
  "id": "d_null_image",
  "level": "2",
  "url": "s_null_image.html#d_null_image",
  "type": "Definition",
  "number": "1.10.1",
  "title": "Null space and image.",
  "body": " Null space and image   Let be a linear transformation.   Null space of  The null space of is the subset of defined as .    Image of  The image (or range ) of is the subset of defined as .      "
},
{
  "id": "rm_nullspace_image",
  "level": "2",
  "url": "s_null_image.html#rm_nullspace_image",
  "type": "Remark",
  "number": "1.10.2",
  "title": "Null space and image.",
  "body": " Null space and image  We gather a few simple observations about the null space and image of a linear map    Let . It is useful to keep in mind where and  live in this picture: we have and . In other words, the null space is a subset of the domain, and the image is a subset of the codomain. See .    Note that the image of a linear transformation is just its image when considered simply as a function of sets. (See .)    The notion of a null space is analogous to the set of zeros (or roots) of a real-valued function , , and the zeros of is a useful English shorthand for . However, there is an important difference between the null space of a linear transformation and the zeros of an arbitrary real-valued function: the null space of a linear transformation comes with the added structure of a vector space ( ), whereas the zeros of an arbitrary function in general do not.  The same observation can be made about the image of a linear transformation ( ), in comparison to the image of an arbitrary function.     "
},
{
  "id": "fig_null_image",
  "level": "2",
  "url": "s_null_image.html#fig_null_image",
  "type": "Figure",
  "number": "1.10.3",
  "title": "Null space and image",
  "body": " Null space and image  Null space and image     Null space lives in the domain; image lives in the codomain.         The entire null space gets mapped to .         The entire domain is mapped to .        "
},
{
  "id": "th_nullspace_image",
  "level": "2",
  "url": "s_null_image.html#th_nullspace_image",
  "type": "Theorem",
  "number": "1.10.4",
  "title": "Null space and image.",
  "body": " Null space and image   If is a linear transformation, then is a subspace of , and is a subspace of .     Null space of  We use the two-step technique to prove is a subspace.   Since ( ), we see that .    Suppose . Given any , we have . This shows that , completing our proof.       Image of  The proof proceeds in a similar manner, using the two-step technique.   Since ( ), we see that is hit by , and hence is a member of .    Assume vectors are elements of . By definition, this means there are vectors such that for . Now given any linear combination , we have . This shows that for any linear combination , there is an element such that . We conclude that if , then for any , as desired.       "
},
{
  "id": "eg_nullspace_image_transposition",
  "level": "2",
  "url": "s_null_image.html#eg_nullspace_image_transposition",
  "type": "Example",
  "number": "1.10.5",
  "title": "",
  "body": "  Define as .   Prove that is linear.    Identify as a familiar matrix subspace.    Identify as a familiar matrix subspace.          Linearity is an easy consequence of transpose properties. For any and , we have .  Alternatively, since we already showed that the transpose operator is linear on , and since , it follows that is linear.    We have . Thus is the subspace of symmetric matrices!    Let , subspace of skew-symmetric matrices. We claim . As this is a set equality, we prove it by showing the two set inclusions and . (See )  The inclusion is the easier of the two. If , then for some . Using various properties of transposition, we have , showing that is skew-symmetric, and thus , as desired.  The inclusion is trickier: we must show that if is skew-symmetric, then there is an such that . Assume we have a with . Letting we have . Thus we have found a matrix satisfying . It follows that .      "
},
{
  "id": "",
  "level": "2",
  "url": "s_null_image.html#",
  "type": "Example",
  "number": "1.10.6",
  "title": "Differential operator.",
  "body": " Differential operator   Let be a closed finite interval of . Define as .   Identify as a familiar function subspace.    Identify as a familiar function subspace.          By definition, we have . From calculus, we know that for all if and only if is a constant function. Thus $\\NS T$ is the set of all constant functions on .    By definition . Equivalently, using some calculus terminology, is the set of continuous functions on that have an antiderivative . It follows from the fundamental theorem of calculus that in fact all continuous function on have an antiderivative. Thus .      "
},
{
  "id": "proc_subspace_as_null",
  "level": "2",
  "url": "s_null_image.html#proc_subspace_as_null",
  "type": "Procedure",
  "number": "1.10.7",
  "title": "Subspaces as null space.",
  "body": " Subspaces as null space   Let be a vector space, and let be a subset of . The following procedure provides an indirect way of proving that is a subspace of .   Produce a linear transformation .    Show that .      "
},
{
  "id": "eg_poly_eval",
  "level": "2",
  "url": "s_null_image.html#eg_poly_eval",
  "type": "Example",
  "number": "1.10.8",
  "title": "Polynomial evaluation.",
  "body": " Polynomial evaluation   Show that is a subspace of using .    We make use of the evaluation linear transformations introduced earlier. Define the linear transformations . We see that if and only if , or equivalently, if and only if . Thus , the null space of the linear transformation . It follows that is a linear transformation.   "
},
{
  "id": "eg_homog_diff_eqn",
  "level": "2",
  "url": "s_null_image.html#eg_homog_diff_eqn",
  "type": "Example",
  "number": "1.10.9",
  "title": "Homogeneous linear differential equation.",
  "body": " Homogeneous linear differential equation   Let be an interval of , let be continuous functions on ( , ) for all , and define as the set of functions satisfying the linear homogeneous differential equation . Prove that is a subspace of .    Define as . We have , showing that is a linear transformation. The set of solutions to is precisely , making this set a subspace of .   "
},
{
  "id": "eg_null_im_matrix",
  "level": "2",
  "url": "s_null_image.html#eg_null_im_matrix",
  "type": "Example",
  "number": "1.10.10",
  "title": "Matrix transformation.",
  "body": " Matrix transformation   Let be an matrix, and let be the columns of , considered as elements of . Show that the null space and image of the corresponding matrix transformation can be identified with the following fundamental spaces of : .    For the null space, we have . The statment about follows from the following observation about matrix equations: we can solve if and only if can be expressed as a linear combination of the columns of . (This observation, in turn, follows from the column method description of matrix multiplication .) Taking this for granted, we then have .   "
},
{
  "id": "th_inj_surj_bij",
  "level": "2",
  "url": "s_null_image.html#th_inj_surj_bij",
  "type": "Theorem",
  "number": "1.10.11",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective   Let be a linear transformation.    is injective if and only if .     is surjective if and only if .     is bijective if and only if and .          We prove both implications separately.  First observe that if , then , since . Thus, if is injective, then we have . It follows that .  Now assume that . Given , we have . We conclude that is injective in this case.    This is a purely set-theoretic result.    This is an elementary consequence of (1) and (2).      "
},
{
  "id": "s_rank_nullity",
  "level": "1",
  "url": "s_rank_nullity.html",
  "type": "Section",
  "number": "1.11",
  "title": "Rank-nullity theorem",
  "body": " Rank-nullity theorem  We now prove the rank-nullity theorem , sometimes called the fundamental theorem of linear algebra . This theorem relates the dimensions of the null space and image of a linear transformation , assuming is finite dimensional. Roughly speaking, it says that the bigger the null space, the smaller the image. More precisely, it tells us that . As we will see, this elegant result can be used to significantly simplify computations with linear transformations. For example, in a situation where we wish to compute explicitly both the null space and image of a given linear transformation, we can often get away with just computing one of the two spaces and using the rank-nullity theorem (and a dimension argument) to easily determine the other. Additionally, the rank-nullity theorem will directly imply some intuitively obvious properties of linear transformations. For example, suppose is a finite-dimensional vector space. It seems obvious that if , then there is no linear transformation mapping surjectively onto : , you should not be able to map a smaller vector space onto a bigger one. Similarly, if , then we expect that there is no injective linear transformation mapping injectively into . Both these results are easy consequences of the rank-nullity theorem .   Rank-nullity theorem   Let be a finite-dimensional vector space. If is a linear transformation, then .    Choose a basis of and extend to a basis , using . From the proof of it follows that , where . We claim that is a basis of . Once this is established, follows easily, since then we have , and thus . We will prove is a basis of by proving that it is linearly independent and a spanning set.   Proof that is linearly independent  Assume . Since is linear, this implies that and hence that . On the other hand, we have . Since , we have , and hence . Lastly, since is linearly independent, we conclude that for all , as desired.    Proof that  We prove and separately.  Since is a subspace, and since for all , it follows that from statement (2) of .  For the other inclusion, we have , since for all . But then , proving that .      Rank-nullity theorem  Some textbooks will define the rank and nullity of a linear transformation as and , respectively. This is where the name of this theorem comes from.   The rank-nullity theorem relates the size (measured by dimension) of the two spaces and . This can be useful in computations when one of these two spaces is easy to compute.   Rank-nullity: image from null space   Let be defined as . Use the rank-nullity theorem to prove that is surjective.         Injective, surjective, bijective   Let be a finite-dimensional vector space, and let be a linear transformation.   If , then is not injective.    If , then is not surjective.    Assume further that . The following statements are equivalent.    is bijective.     is injective.     is surjective.             First assume . We have . It follows that , and hence that , and thus is not injective.  Now assume that and . Pick an infinite linearly independent tuple in , and let be any finite subtuple of length . We know from a homework exercise that is linearly independent. Thus is an -dimensional subspace of and satisfies . Applying the previous argument to the restriction , we conclude that . Since , we conclude that , and thus is not injective.    We assume . Since we cannot have have . Thus is not surjective.    We assume . We prove a cycle of implications (a) (b) (c) (d).  We have (a) implies (b) by definition.  Assume is injective. By , this implies and hence . It follows that . Since and , we have by . Thus is surjective. This proves that (b) implies (c).    If is surjective, then in which case . It follows that . Hence , or equivalently, . It follows that is injective. Since is injective and surjective, it is bijective. This proves that (c) implies (a).        Polynomial evaluation   Let be an infinite subset of the field , let be a positive integer, and let be a choice of distinct scalars that we think of as inputs. Prove that for any choice of outputs there is a unique polynomial satisfying . In other words, given any choice of values , we can construct a unique polynomial whose value at is for all .        "
},
{
  "id": "th_rank_nullity",
  "level": "2",
  "url": "s_rank_nullity.html#th_rank_nullity",
  "type": "Theorem",
  "number": "1.11.1",
  "title": "Rank-nullity theorem.",
  "body": " Rank-nullity theorem   Let be a finite-dimensional vector space. If is a linear transformation, then .    Choose a basis of and extend to a basis , using . From the proof of it follows that , where . We claim that is a basis of . Once this is established, follows easily, since then we have , and thus . We will prove is a basis of by proving that it is linearly independent and a spanning set.   Proof that is linearly independent  Assume . Since is linear, this implies that and hence that . On the other hand, we have . Since , we have , and hence . Lastly, since is linearly independent, we conclude that for all , as desired.    Proof that  We prove and separately.  Since is a subspace, and since for all , it follows that from statement (2) of .  For the other inclusion, we have , since for all . But then , proving that .    "
},
{
  "id": "s_rank_nullity-4",
  "level": "2",
  "url": "s_rank_nullity.html#s_rank_nullity-4",
  "type": "Remark",
  "number": "1.11.2",
  "title": "Rank-nullity theorem.",
  "body": " Rank-nullity theorem  Some textbooks will define the rank and nullity of a linear transformation as and , respectively. This is where the name of this theorem comes from.  "
},
{
  "id": "eg_rank_nullity",
  "level": "2",
  "url": "s_rank_nullity.html#eg_rank_nullity",
  "type": "Example",
  "number": "1.11.3",
  "title": "Rank-nullity: image from null space.",
  "body": " Rank-nullity: image from null space   Let be defined as . Use the rank-nullity theorem to prove that is surjective.       "
},
{
  "id": "cor_inj_surj_bij",
  "level": "2",
  "url": "s_rank_nullity.html#cor_inj_surj_bij",
  "type": "Corollary",
  "number": "1.11.4",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective   Let be a finite-dimensional vector space, and let be a linear transformation.   If , then is not injective.    If , then is not surjective.    Assume further that . The following statements are equivalent.    is bijective.     is injective.     is surjective.             First assume . We have . It follows that , and hence that , and thus is not injective.  Now assume that and . Pick an infinite linearly independent tuple in , and let be any finite subtuple of length . We know from a homework exercise that is linearly independent. Thus is an -dimensional subspace of and satisfies . Applying the previous argument to the restriction , we conclude that . Since , we conclude that , and thus is not injective.    We assume . Since we cannot have have . Thus is not surjective.    We assume . We prove a cycle of implications (a) (b) (c) (d).  We have (a) implies (b) by definition.  Assume is injective. By , this implies and hence . It follows that . Since and , we have by . Thus is surjective. This proves that (b) implies (c).    If is surjective, then in which case . It follows that . Hence , or equivalently, . It follows that is injective. Since is injective and surjective, it is bijective. This proves that (c) implies (a).      "
},
{
  "id": "eg_rank_null_polys",
  "level": "2",
  "url": "s_rank_nullity.html#eg_rank_null_polys",
  "type": "Example",
  "number": "1.11.5",
  "title": "Polynomial evaluation.",
  "body": " Polynomial evaluation   Let be an infinite subset of the field , let be a positive integer, and let be a choice of distinct scalars that we think of as inputs. Prove that for any choice of outputs there is a unique polynomial satisfying . In other words, given any choice of values , we can construct a unique polynomial whose value at is for all .       "
},
{
  "id": "s_isom",
  "level": "1",
  "url": "s_isom.html",
  "type": "Section",
  "number": "1.12",
  "title": "Isomorphisms",
  "body": " Isomorphisms  The word isomorphism is derived from the Greek terms iso , meaning same , and morphe , meaning form . As we will see, two isomorphic vector spaces and are essentially the same creature, at least as far as linear algebraic properties are concerned. Furthermore, an isomorphism provides a one-to-one correspondence between them: a dictionary that allows us to translate statements about to statements about , and vice versa.  The definition of an isomorphism will involve the function composition operation. As such, we begin with some notational conventions and elementary properties of compositions of linear maps.   Composition of linear transformations  Given linear transformations and , we will denote their composition as .    Composition of linear transformations   Let , , and .   The composition is a linear transformation.          and .     and .       The proofs of (2)-(4) follow pretty much directly from the definitions of the function operations involved and basic set-theoretic properties of functions and their compositions. As such we content ourselves with a proof only of (1). Assume and . We use the one-step technique to show the composition is linear. Given any and scalars , we have .     Isomorphism   A linear map is an isomorphism if there is a linear transformation satisfying and . When this is the case we call the inverse of , and write . Two vector spaces and are isomorphic if there is an isomorphism .     Inverse functions  Using the language of inverse functions, we see that a linear transformation is an isomorphism if (a) it is invertible, and (b) its inverse is itself a linear transformation. As we will see in the next theorem, this second condition is automatic.    Isomorphisms   Let . The following statements are equivalent.    is an isomorphism.     is invertible.     is bijective.       The implication (1) (2) follows directly from the definition. Furthermore, the equivalence (2) (3) is a purely set-theoretic result relating invertible and bijective functions. It remains then only to show that (2) (1): , that if is linear and invertible, then its inverse is itself linear.  Assume is linear and invertible. We will use the one-step technique to prove is linear. First, given any , since and are inverses of one another, there are vectors satisfying . It then follows that given any scalars , we have .    The equivalences in give us a number of potential approaches to deciding whether a linear transformation is an isomorphism, as we detail in the next procedure.   Isomorphisms   Assume is a linear transformation. Below you find three separate approaches for deciding whether is an isomorphism. Depending on the context, one approach may be more convenient than the others.   Invertibility  Provide an inverse function , or prove that no such inverse function exists. By , an inverse function is automatically linear.    Bijection  Determine whether is bijective. This can be accomplished by computing and .     If , then the following statements are equivalent.    is an isomorphism.     is injective (equivalently, ).     is surjective (equivalently, ).           Transposition   Define as . Prove that is an isomorphism.    We saw in the the transposition operation is linear. To show it is an isomorphism, we produce an inverse. Define as . (Note that even though the rule for is the same as that for ( , take the transpose), we do not necessarily have as functions since their domains (and codomains) are not necessarily equal.) We have , proving that the two maps are indeed inverses of one another. We conclude that is invertible, and hence an isomorphism.     Evaluation   Let be an infinite subset of the field , let be a positive integer, and let be a choice of distinct scalars ( , for ). Prove that the evaluation map is an isomorphism.    We showed in that this linear transformation is bijective, and hence an isomorphism.     Isomorphisms preserve structure   Let be an isomorphism.   A tuple of vectors in is linearly independent if and only if its image is linearly independent.    Let , where is a tuple in . We have .     is a basis of if and only if is a basis of .     is finite-dimensional if and only if is finite-dimensional, and in this case we have .     is a subspace of if and only if is a subspace of .    We have for subspaces if and only if .       Most of the statements of this theorem follow almost immediately from the observation that since is an isomorphism we have for any linear combination expression in , along with the analogous statement for . Thus, for example, we have . This proves (2). The proof of (1) is similar, and (3) and (4) follow immediately from (1) and (2). Statement (5) is a result of the fact that and . We leave (6) as an exercise for the reader.     Finite-dimensional spaces   Let and be finite dimensional vector spaces. The following statements are equivalent.    is isomorphic to .     .        Matrix transformations   Prove that a matrix transformation is an isomorphism if and only if and is invertible.    We know from that matrix transformations are linear.  Assume and is invertible. We claim that . Indeed, for all , we have . This proves that and thus that , as claimed. We conclude is an isomorphism.  Lastly assume is an isomorphism. By , we conclude that , and hence that . Since is an isomorphism, it has a linear inverse ; since all linear transformations of are matrix transformations, we have for some matrix . We have . Thus , showing that is invertible.    "
},
{
  "id": "s_isom-4",
  "level": "2",
  "url": "s_isom.html#s_isom-4",
  "type": "Convention",
  "number": "1.12.1",
  "title": "Composition of linear transformations.",
  "body": " Composition of linear transformations  Given linear transformations and , we will denote their composition as .  "
},
{
  "id": "th_composition",
  "level": "2",
  "url": "s_isom.html#th_composition",
  "type": "Theorem",
  "number": "1.12.2",
  "title": "Composition of linear transformations.",
  "body": " Composition of linear transformations   Let , , and .   The composition is a linear transformation.          and .     and .       The proofs of (2)-(4) follow pretty much directly from the definitions of the function operations involved and basic set-theoretic properties of functions and their compositions. As such we content ourselves with a proof only of (1). Assume and . We use the one-step technique to show the composition is linear. Given any and scalars , we have .   "
},
{
  "id": "d_isom",
  "level": "2",
  "url": "s_isom.html#d_isom",
  "type": "Definition",
  "number": "1.12.3",
  "title": "Isomorphism.",
  "body": " Isomorphism   A linear map is an isomorphism if there is a linear transformation satisfying and . When this is the case we call the inverse of , and write . Two vector spaces and are isomorphic if there is an isomorphism .   "
},
{
  "id": "s_isom-7",
  "level": "2",
  "url": "s_isom.html#s_isom-7",
  "type": "Remark",
  "number": "1.12.4",
  "title": "Inverse functions.",
  "body": " Inverse functions  Using the language of inverse functions, we see that a linear transformation is an isomorphism if (a) it is invertible, and (b) its inverse is itself a linear transformation. As we will see in the next theorem, this second condition is automatic.  "
},
{
  "id": "th_isom",
  "level": "2",
  "url": "s_isom.html#th_isom",
  "type": "Theorem",
  "number": "1.12.5",
  "title": "Isomorphisms.",
  "body": " Isomorphisms   Let . The following statements are equivalent.    is an isomorphism.     is invertible.     is bijective.       The implication (1) (2) follows directly from the definition. Furthermore, the equivalence (2) (3) is a purely set-theoretic result relating invertible and bijective functions. It remains then only to show that (2) (1): , that if is linear and invertible, then its inverse is itself linear.  Assume is linear and invertible. We will use the one-step technique to prove is linear. First, given any , since and are inverses of one another, there are vectors satisfying . It then follows that given any scalars , we have .   "
},
{
  "id": "proc_isomorphism",
  "level": "2",
  "url": "s_isom.html#proc_isomorphism",
  "type": "Procedure",
  "number": "1.12.6",
  "title": "Isomorphisms.",
  "body": " Isomorphisms   Assume is a linear transformation. Below you find three separate approaches for deciding whether is an isomorphism. Depending on the context, one approach may be more convenient than the others.   Invertibility  Provide an inverse function , or prove that no such inverse function exists. By , an inverse function is automatically linear.    Bijection  Determine whether is bijective. This can be accomplished by computing and .     If , then the following statements are equivalent.    is an isomorphism.     is injective (equivalently, ).     is surjective (equivalently, ).         "
},
{
  "id": "eg_isom_transposition",
  "level": "2",
  "url": "s_isom.html#eg_isom_transposition",
  "type": "Example",
  "number": "1.12.7",
  "title": "Transposition.",
  "body": " Transposition   Define as . Prove that is an isomorphism.    We saw in the the transposition operation is linear. To show it is an isomorphism, we produce an inverse. Define as . (Note that even though the rule for is the same as that for ( , take the transpose), we do not necessarily have as functions since their domains (and codomains) are not necessarily equal.) We have , proving that the two maps are indeed inverses of one another. We conclude that is invertible, and hence an isomorphism.   "
},
{
  "id": "eg_isom_evaluation",
  "level": "2",
  "url": "s_isom.html#eg_isom_evaluation",
  "type": "Example",
  "number": "1.12.8",
  "title": "Evaluation.",
  "body": " Evaluation   Let be an infinite subset of the field , let be a positive integer, and let be a choice of distinct scalars ( , for ). Prove that the evaluation map is an isomorphism.    We showed in that this linear transformation is bijective, and hence an isomorphism.   "
},
{
  "id": "th_isom_structure",
  "level": "2",
  "url": "s_isom.html#th_isom_structure",
  "type": "Theorem",
  "number": "1.12.9",
  "title": "Isomorphisms preserve structure.",
  "body": " Isomorphisms preserve structure   Let be an isomorphism.   A tuple of vectors in is linearly independent if and only if its image is linearly independent.    Let , where is a tuple in . We have .     is a basis of if and only if is a basis of .     is finite-dimensional if and only if is finite-dimensional, and in this case we have .     is a subspace of if and only if is a subspace of .    We have for subspaces if and only if .       Most of the statements of this theorem follow almost immediately from the observation that since is an isomorphism we have for any linear combination expression in , along with the analogous statement for . Thus, for example, we have . This proves (2). The proof of (1) is similar, and (3) and (4) follow immediately from (1) and (2). Statement (5) is a result of the fact that and . We leave (6) as an exercise for the reader.   "
},
{
  "id": "cor_isom_finite_dim",
  "level": "2",
  "url": "s_isom.html#cor_isom_finite_dim",
  "type": "Corollary",
  "number": "1.12.10",
  "title": "Finite-dimensional spaces.",
  "body": " Finite-dimensional spaces   Let and be finite dimensional vector spaces. The following statements are equivalent.    is isomorphic to .     .      "
},
{
  "id": "eg_isom_matrix",
  "level": "2",
  "url": "s_isom.html#eg_isom_matrix",
  "type": "Example",
  "number": "1.12.11",
  "title": "Matrix transformations.",
  "body": " Matrix transformations   Prove that a matrix transformation is an isomorphism if and only if and is invertible.    We know from that matrix transformations are linear.  Assume and is invertible. We claim that . Indeed, for all , we have . This proves that and thus that , as claimed. We conclude is an isomorphism.  Lastly assume is an isomorphism. By , we conclude that , and hence that . Since is an isomorphism, it has a linear inverse ; since all linear transformations of are matrix transformations, we have for some matrix . We have . Thus , showing that is invertible.   "
},
{
  "id": "s_matrix_reps",
  "level": "1",
  "url": "s_matrix_reps.html",
  "type": "Section",
  "number": "1.13",
  "title": "Coordinate vectors and matrix representations",
  "body": " Coordinate vectors and matrix representations   Given a basis of a vector space , we know from that any can be expressed in a unique way as , where for all but finitely many . The notion of a coordinate vector turn this observation into a computational tool by exploiting the resulting correspondence . We will use the correspondence in two distinct ways, as described below.   Given an -dimensional vector space and basis , the correspondence is an isomorphism that allows us to treat elements of the abstract space as if they were elements of , and to then make use of our wealth of computational procedures related to -tuples.    The correspondence is also useful when working in itself. Namely, there will be situations where it is convenient to represent vectors with a particular nonstandard basis , as opposed to the standard basis . In this setting the correspondence will be used as a change of coordinates technique.       Coordinate vectors   Coordinate vectors   Let be a basis of the vector space . Given , let be the unique choice of scalars such that can be expressed as the linear combination . We define the tuple to be the coordinate vector of with respect to , denoted : , . We call the function the coordinate vector map with respect to .     Coordinate vectors   Let be a basis of the vector space , and let be the coordinate vector map with respect to .    is an injective transformation from to .     is an isomorphism from to if and only if is finite.          We use the 1-step technique to show is a linear transformation. Given and scalars , we first express as linear combinations of elements of , and then compute . Next, we prove is injective by showing that its null space is trivial. We have Given any , writing as a linear combination of the elements of , we see that . Thus .    First assume is finite, with . In this case, we have , and since is injective (by (a)), we conclude is an isomorphism ( ).  Lastly, assume is infinite. Given any , the coefficients appearing in the unique linear combination expression satisfy for all but finitely many . It follows that its image is a tuple with only finitely many nonzero coordinates. But since is infinite, there are tuples in , with infinitely many nonzero coordinates: , the tuple consisting of all 1's. It follows that is not surjective ( , ), and hence not an isomorphism.        Computing coordinate vectors   Let be a basis of the vector space . Given , compute the coordinate vector by following these steps.   Set up the vector equation in the unknowns .    Solve for the unknowns in some manner. A surefire technique is to reduce the vector equation to a linear system and use Gaussian elimination. However, there are some situations when you can simply produce the scalars by inspection.    Conclude that .       As illustrated by the next example, one setting for which we can compute by inspection (see (2) of ) is when is one of our standard ordered bases.   Standard bases   Computing coordinate vectors relative to one of our standard ordered bases for , , or amounts to just listing the coefficients or entries used to specify the given vector. The examples below serve to illustrate the general method in this setting.   Consider the standard basis of . For any we have , since .    Consider the standard basis of . For any we have since .    Let be the standard basis of , where is an infinite subset of the field . Given any polynomial , we have , since .        Coordinate vectors with respect to standarad bases  As illustrated in the example above, in the very particular case where and , the coordinate vector map is just the identity map: , we have for all . As simple as this observation is, it is worth pointing out, as this particular case often arises when computing examples (or proving theorems).    Reorderings of standard bases   If we choose an alternate ordering of one of the standard ordered bases, the entries of the coordinate vector are reordered accordingly, as illustrated by the examples below.   Consider the reordered basis of . Given we have , since .    Consider the reordered basis of . Given , we have , since .        Nonstandard bases   For a nonstandard ordered basis, we usually compute coordinate vectors by solving a relevant system of linear equations, as the examples below illustrate.   Let , , and . Compute . More generally, compute for an arbitrary .    Let , , and . Compute . More generally, compute for an arbitrary element .          Using , we compute by finding the unique pair satisfying . By inspection, we see that . We conclude that . More generally, to compute for an arbitrary , we must find the pair satisfying , or equivalently . The usual Gaussian elimination technique yields the unique solution , and thus for .    To compute we must find the unique triple satisfying . The equivalent linear system once we combine like terms and equate coefficients ( ) is , which row reduces to the system . The unique solution to this system is . We conclude . The same reasoning shows that more generally, given , we have .        Contracting and extending to bases in general spaces   Let be a vector space of dimension , and let be a tuple of vectors of .   Contracting to a basis  Let . To contract to a basis , proceed as follows.   Pick any ordered basis of and let .    Use a the column space algorithm to contract to a basis of .    The tuple is a basis for .       Extending to a basis  Assume is linearly independent. To extend to a basis of proceed as follows.   Pick any ordered basis of and let , the corresponding tuple in .    Use an appropriate fundamental space algorithm to extend to a basis of .    For all find vectors satisfying . The tuple is a basis of .            Let of the tuple of matrices of , where , and define .   Contract to a basis of .    Let , where for any matrix , , the {\\em trace} of : , is the space of all trace-zero matrices. Show that , and determine whether .          Let be the standard basis of . Apply to the elements of the given to get a corresponding set : . Apply the column space procedure to contract to a basis of : . We conclude that the first two vectors of form a basis for ; it follows that the first two elements of form a basis for . That is . In particular, this means .    Since for all , we have for all , and hence .  By inspection, we see that the space of all trace-zero matrices has basis , and hence . Since , we conclude that .         Matrix representations  Of course, we are not just interested in studying vector spaces and their elements, but also linear transformations between vector spaces. Once again, by choosing bases for and we are able to get a computational grip on the transformation . When both and are finite dimensional, this takes the form of a matrix representation of .   Matrix representations of linear transformations   Let and be vector spaces with ordered bases and , respectively. Given a linear transformation , the matrix representing with respect to and , is the matrix whose -th column is , considered as a column vector: , . In the special case where and we pick we write simply .     Matrix representation   The function is linear. Compute , where and are the standard bases for and , respectively.    We have and . By definition, we have . We first compute for each : . To finish our computation, we must compute for each . Since is the standard basis of , this is not difficult: in general we have . Thus and .     Differentiation   Let be an infinite subset of , and define as . Compute , where and are the standard bases of and     Let and . We have for all . Since is standard, we easily compute . Using recipe we conclude that . In more detail, is the matrix whose first column is the zero column vector, and whose -th column for is the column vector that has in the -th entry and zeros elsewhere.     Different choice of bases   Define as .   Compute , where is the standard basis of .    Compute , where .          According to , since is the standard basis is the matrix such that : .    We have , where the last equality uses the fact that and , as you can verify yourself.   So we have and . Moral: different choices of bases yield different matrix representations.     Defining property of matrix representation   Let be a linear transformation, where and , and let be ordered bases for and , respectively.   For all we have .    Property defines uniquely: , if is an matrix satisfying for all , then .       Let .   By definition we have . Given any , we can write for some , in which case we have , as desired.    If satisfies for all , then in particular we have for all . Since is the -th element of , we have , the -th standard basis element of . Using the column method of matrix multiplciation, we see that where is the -th column of . Thus implies that the -th column of is equal to , the -th column of , for all . Since and have identical columns, we conclude that , as desired.        Uniqueness of  The uniqueness property described in (2) of provides an alternative way of computing that can be useful in certain situations: namely, if we can produce an matrix that satisfies the defining property for all , then by uniqueness we must have .  We illustrate this technique in the examples and proofs below.    Standard matrix   Let be a linear transformation. Recall that there is a unique matrix , the standard matrix of , such that . Prove that , where and are the standard bases of and , respectively. In other words, the standard matrix of is precisely the matrix representation of with respect to the standard bases.    Let be the standard matrix of . By definition, this means for all . Using the uniqueness claim of , to show that , it suffices to show that satisfies : , for all . Since and are standard bases of and , however, we have and . Thus we must show , which is precisely the defining property of the standard matrix of . Thus .     Matrix representations of composition   Let and , and let be bases for , , and , respectively. We have     Let . We prove that by showing that satisfies the defining equation of : , that for all . To this end, we have for all . We conclude that and thus , as desired.    Let , , and be as in . The defining property of can be summarized by saying that the following diagram is commutative .   Commutative diagram for  Commutative diagram for       The diagram being commutative here means that starting with an element in the top left of the diagram, whether we travel to the bottom right of the diagram either by first applying and then applying ( go right, then down ), or else by first applying and then applying ( go down, then right ), we get the same result! (The bottom map should technically be labeled , where , but this would detract from the elegance of the diagram.)  Besides commutativity, the other import feature of is that the two vertical coordinate transformations identify the domain and codomain of with the familiar spaces and isomorphically. These properties together allow us to translate any linear algebraic question about to an equivalent question about the matrix , as the following theorem indicates.   Matrix representation isomorphism   Let and be bases of the vector spaces and , respectively, where and .   The map is an isomorphism.    We have        Statement (2) follows directly from (1) since . (Alternatively, you showed on a homework that has a basis of length .) To prove (1), we will show that is linear and bijective.  The linearity of can be proved by direct appeal to the formula and the fact that the coordinate vector map is linear. Readers are invited to pursue this proof on their own. We will instead take the opportunity to make use of the defining property within a 1-step proof. Given linear maps and scalars , we will show that by showing that the matrix satisfies the relevant defining property for all . Here goes: . Since satisfies the relevant property, we conclude that , as desired.  We now show directly that is bijective: , given any matrix , we will show that there is a unique linear transformation satisfying . Let . Given , let for all , and let be the unique tuple of vectors in satisfying . (There is such a unique tuple as is an isomorphism.) By there is a unique linear map satisfying for all . We claim that : indeed, letting and using the defining property , we see that for all . Since is a basis and is an isomorphism, is a basis of . The equation above proves that and agree on the basis . It follows from (again) that , and hence that , as desired.     Matrix representations of   Let and be bases of the vector spaces and , respectively, where and , let , and let .   The restriction of to defines an isomorphism As a result, if and only if , and .    The restriction of to defines an isomorphism . As a result, if and only if , and .       This proof is left as a homework exercise.     Matrix representation of null space and image   Commutative diagram including null space and image     Having made explicit the connection between the important subspaces associtated to a linear transformation and its matrix representation, we end with a corollary that connects invertibility of a matrix transformations and its standard matrix . Recall ( ) that in this case we have , where is the standard basis of . The corollary lists 9 equivalent formulations for a matrix (or its matrix transformation ) to be invertible. The statements within each column should be fairly easily seen to be equivalent; equivalence connections between the columns are easily made using the rank-nullity theorem.   Invertible matrix theorem   Let and let be its corresponding matrix transformation. The following statements are equivalent.    is an isomorphism.               is invertible.               has a unique solution for all .     has a unique solution (viz., ).     has a solution for all .       We don't have the heart to provide a proof; this would spoil the fun of charting a path of implications around the grid above!     "
},
{
  "id": "d_coor_vect",
  "level": "2",
  "url": "s_matrix_reps.html#d_coor_vect",
  "type": "Definition",
  "number": "1.13.1",
  "title": "Coordinate vectors.",
  "body": " Coordinate vectors   Let be a basis of the vector space . Given , let be the unique choice of scalars such that can be expressed as the linear combination . We define the tuple to be the coordinate vector of with respect to , denoted : , . We call the function the coordinate vector map with respect to .   "
},
{
  "id": "th_coor_vectors",
  "level": "2",
  "url": "s_matrix_reps.html#th_coor_vectors",
  "type": "Theorem",
  "number": "1.13.2",
  "title": "Coordinate vectors.",
  "body": " Coordinate vectors   Let be a basis of the vector space , and let be the coordinate vector map with respect to .    is an injective transformation from to .     is an isomorphism from to if and only if is finite.          We use the 1-step technique to show is a linear transformation. Given and scalars , we first express as linear combinations of elements of , and then compute . Next, we prove is injective by showing that its null space is trivial. We have Given any , writing as a linear combination of the elements of , we see that . Thus .    First assume is finite, with . In this case, we have , and since is injective (by (a)), we conclude is an isomorphism ( ).  Lastly, assume is infinite. Given any , the coefficients appearing in the unique linear combination expression satisfy for all but finitely many . It follows that its image is a tuple with only finitely many nonzero coordinates. But since is infinite, there are tuples in , with infinitely many nonzero coordinates: , the tuple consisting of all 1's. It follows that is not surjective ( , ), and hence not an isomorphism.      "
},
{
  "id": "proc_coor_vec",
  "level": "2",
  "url": "s_matrix_reps.html#proc_coor_vec",
  "type": "Procedure",
  "number": "1.13.3",
  "title": "Computing coordinate vectors.",
  "body": " Computing coordinate vectors   Let be a basis of the vector space . Given , compute the coordinate vector by following these steps.   Set up the vector equation in the unknowns .    Solve for the unknowns in some manner. A surefire technique is to reduce the vector equation to a linear system and use Gaussian elimination. However, there are some situations when you can simply produce the scalars by inspection.    Conclude that .      "
},
{
  "id": "eg_coordinatevector_standard",
  "level": "2",
  "url": "s_matrix_reps.html#eg_coordinatevector_standard",
  "type": "Example",
  "number": "1.13.4",
  "title": "Standard bases.",
  "body": " Standard bases   Computing coordinate vectors relative to one of our standard ordered bases for , , or amounts to just listing the coefficients or entries used to specify the given vector. The examples below serve to illustrate the general method in this setting.   Consider the standard basis of . For any we have , since .    Consider the standard basis of . For any we have since .    Let be the standard basis of , where is an infinite subset of the field . Given any polynomial , we have , since .      "
},
{
  "id": "rm_coor_vec_std",
  "level": "2",
  "url": "s_matrix_reps.html#rm_coor_vec_std",
  "type": "Remark",
  "number": "1.13.5",
  "title": "Coordinate vectors with respect to standarad bases.",
  "body": " Coordinate vectors with respect to standarad bases  As illustrated in the example above, in the very particular case where and , the coordinate vector map is just the identity map: , we have for all . As simple as this observation is, it is worth pointing out, as this particular case often arises when computing examples (or proving theorems).  "
},
{
  "id": "ss_coordinate_vectors-8",
  "level": "2",
  "url": "s_matrix_reps.html#ss_coordinate_vectors-8",
  "type": "Example",
  "number": "1.13.6",
  "title": "Reorderings of standard bases.",
  "body": " Reorderings of standard bases   If we choose an alternate ordering of one of the standard ordered bases, the entries of the coordinate vector are reordered accordingly, as illustrated by the examples below.   Consider the reordered basis of . Given we have , since .    Consider the reordered basis of . Given , we have , since .      "
},
{
  "id": "ss_coordinate_vectors-9",
  "level": "2",
  "url": "s_matrix_reps.html#ss_coordinate_vectors-9",
  "type": "Example",
  "number": "1.13.7",
  "title": "Nonstandard bases.",
  "body": " Nonstandard bases   For a nonstandard ordered basis, we usually compute coordinate vectors by solving a relevant system of linear equations, as the examples below illustrate.   Let , , and . Compute . More generally, compute for an arbitrary .    Let , , and . Compute . More generally, compute for an arbitrary element .          Using , we compute by finding the unique pair satisfying . By inspection, we see that . We conclude that . More generally, to compute for an arbitrary , we must find the pair satisfying , or equivalently . The usual Gaussian elimination technique yields the unique solution , and thus for .    To compute we must find the unique triple satisfying . The equivalent linear system once we combine like terms and equate coefficients ( ) is , which row reduces to the system . The unique solution to this system is . We conclude . The same reasoning shows that more generally, given , we have .      "
},
{
  "id": "proc_contract_extend_general",
  "level": "2",
  "url": "s_matrix_reps.html#proc_contract_extend_general",
  "type": "Procedure",
  "number": "1.13.8",
  "title": "Contracting and extending to bases in general spaces.",
  "body": " Contracting and extending to bases in general spaces   Let be a vector space of dimension , and let be a tuple of vectors of .   Contracting to a basis  Let . To contract to a basis , proceed as follows.   Pick any ordered basis of and let .    Use a the column space algorithm to contract to a basis of .    The tuple is a basis for .       Extending to a basis  Assume is linearly independent. To extend to a basis of proceed as follows.   Pick any ordered basis of and let , the corresponding tuple in .    Use an appropriate fundamental space algorithm to extend to a basis of .    For all find vectors satisfying . The tuple is a basis of .         "
},
{
  "id": "ss_coordinate_vectors-11",
  "level": "2",
  "url": "s_matrix_reps.html#ss_coordinate_vectors-11",
  "type": "Example",
  "number": "1.13.9",
  "title": "",
  "body": "  Let of the tuple of matrices of , where , and define .   Contract to a basis of .    Let , where for any matrix , , the {\\em trace} of : , is the space of all trace-zero matrices. Show that , and determine whether .          Let be the standard basis of . Apply to the elements of the given to get a corresponding set : . Apply the column space procedure to contract to a basis of : . We conclude that the first two vectors of form a basis for ; it follows that the first two elements of form a basis for . That is . In particular, this means .    Since for all , we have for all , and hence .  By inspection, we see that the space of all trace-zero matrices has basis , and hence . Since , we conclude that .      "
},
{
  "id": "d_matrix_representation",
  "level": "2",
  "url": "s_matrix_reps.html#d_matrix_representation",
  "type": "Definition",
  "number": "1.13.10",
  "title": "Matrix representations of linear transformations.",
  "body": " Matrix representations of linear transformations   Let and be vector spaces with ordered bases and , respectively. Given a linear transformation , the matrix representing with respect to and , is the matrix whose -th column is , considered as a column vector: , . In the special case where and we pick we write simply .   "
},
{
  "id": "eg_matrixreps_std_basis",
  "level": "2",
  "url": "s_matrix_reps.html#eg_matrixreps_std_basis",
  "type": "Example",
  "number": "1.13.11",
  "title": "Matrix representation.",
  "body": " Matrix representation   The function is linear. Compute , where and are the standard bases for and , respectively.    We have and . By definition, we have . We first compute for each : . To finish our computation, we must compute for each . Since is the standard basis of , this is not difficult: in general we have . Thus and .   "
},
{
  "id": "eg_matrix_rep_differentiation",
  "level": "2",
  "url": "s_matrix_reps.html#eg_matrix_rep_differentiation",
  "type": "Example",
  "number": "1.13.12",
  "title": "Differentiation.",
  "body": " Differentiation   Let be an infinite subset of , and define as . Compute , where and are the standard bases of and     Let and . We have for all . Since is standard, we easily compute . Using recipe we conclude that . In more detail, is the matrix whose first column is the zero column vector, and whose -th column for is the column vector that has in the -th entry and zeros elsewhere.   "
},
{
  "id": "eg_matrixreps_different_bases",
  "level": "2",
  "url": "s_matrix_reps.html#eg_matrixreps_different_bases",
  "type": "Example",
  "number": "1.13.13",
  "title": "Different choice of bases.",
  "body": " Different choice of bases   Define as .   Compute , where is the standard basis of .    Compute , where .          According to , since is the standard basis is the matrix such that : .    We have , where the last equality uses the fact that and , as you can verify yourself.   So we have and . Moral: different choices of bases yield different matrix representations.   "
},
{
  "id": "th_matrixrep",
  "level": "2",
  "url": "s_matrix_reps.html#th_matrixrep",
  "type": "Theorem",
  "number": "1.13.14",
  "title": "Defining property of matrix representation.",
  "body": " Defining property of matrix representation   Let be a linear transformation, where and , and let be ordered bases for and , respectively.   For all we have .    Property defines uniquely: , if is an matrix satisfying for all , then .       Let .   By definition we have . Given any , we can write for some , in which case we have , as desired.    If satisfies for all , then in particular we have for all . Since is the -th element of , we have , the -th standard basis element of . Using the column method of matrix multiplciation, we see that where is the -th column of . Thus implies that the -th column of is equal to , the -th column of , for all . Since and have identical columns, we conclude that , as desired.      "
},
{
  "id": "rm_matrixreps_uniqueness",
  "level": "2",
  "url": "s_matrix_reps.html#rm_matrixreps_uniqueness",
  "type": "Remark",
  "number": "1.13.15",
  "title": "Uniqueness of <span class=\"process-math\">\\([T]_B^{B'}\\)<\/span>.",
  "body": " Uniqueness of  The uniqueness property described in (2) of provides an alternative way of computing that can be useful in certain situations: namely, if we can produce an matrix that satisfies the defining property for all , then by uniqueness we must have .  We illustrate this technique in the examples and proofs below.  "
},
{
  "id": "eg_std_matrix",
  "level": "2",
  "url": "s_matrix_reps.html#eg_std_matrix",
  "type": "Example",
  "number": "1.13.16",
  "title": "Standard matrix.",
  "body": " Standard matrix   Let be a linear transformation. Recall that there is a unique matrix , the standard matrix of , such that . Prove that , where and are the standard bases of and , respectively. In other words, the standard matrix of is precisely the matrix representation of with respect to the standard bases.    Let be the standard matrix of . By definition, this means for all . Using the uniqueness claim of , to show that , it suffices to show that satisfies : , for all . Since and are standard bases of and , however, we have and . Thus we must show , which is precisely the defining property of the standard matrix of . Thus .   "
},
{
  "id": "cor_matrix_reps_comp",
  "level": "2",
  "url": "s_matrix_reps.html#cor_matrix_reps_comp",
  "type": "Corollary",
  "number": "1.13.17",
  "title": "Matrix representations of composition.",
  "body": " Matrix representations of composition   Let and , and let be bases for , , and , respectively. We have     Let . We prove that by showing that satisfies the defining equation of : , that for all . To this end, we have for all . We conclude that and thus , as desired.   "
},
{
  "id": "fig_comm_diag",
  "level": "2",
  "url": "s_matrix_reps.html#fig_comm_diag",
  "type": "Figure",
  "number": "1.13.18",
  "title": "Commutative diagram for <span class=\"process-math\">\\([T]_B^{B'}\\)<\/span>",
  "body": " Commutative diagram for  Commutative diagram for     "
},
{
  "id": "th_matrix_reps_isom",
  "level": "2",
  "url": "s_matrix_reps.html#th_matrix_reps_isom",
  "type": "Theorem",
  "number": "1.13.19",
  "title": "Matrix representation isomorphism.",
  "body": " Matrix representation isomorphism   Let and be bases of the vector spaces and , respectively, where and .   The map is an isomorphism.    We have        Statement (2) follows directly from (1) since . (Alternatively, you showed on a homework that has a basis of length .) To prove (1), we will show that is linear and bijective.  The linearity of can be proved by direct appeal to the formula and the fact that the coordinate vector map is linear. Readers are invited to pursue this proof on their own. We will instead take the opportunity to make use of the defining property within a 1-step proof. Given linear maps and scalars , we will show that by showing that the matrix satisfies the relevant defining property for all . Here goes: . Since satisfies the relevant property, we conclude that , as desired.  We now show directly that is bijective: , given any matrix , we will show that there is a unique linear transformation satisfying . Let . Given , let for all , and let be the unique tuple of vectors in satisfying . (There is such a unique tuple as is an isomorphism.) By there is a unique linear map satisfying for all . We claim that : indeed, letting and using the defining property , we see that for all . Since is a basis and is an isomorphism, is a basis of . The equation above proves that and agree on the basis . It follows from (again) that , and hence that , as desired.   "
},
{
  "id": "th_matrix_rep_null_im",
  "level": "2",
  "url": "s_matrix_reps.html#th_matrix_rep_null_im",
  "type": "Theorem",
  "number": "1.13.20",
  "title": "Matrix representations of.",
  "body": " Matrix representations of   Let and be bases of the vector spaces and , respectively, where and , let , and let .   The restriction of to defines an isomorphism As a result, if and only if , and .    The restriction of to defines an isomorphism . As a result, if and only if , and .       This proof is left as a homework exercise.   "
},
{
  "id": "fig_matrix_reps_null_im",
  "level": "2",
  "url": "s_matrix_reps.html#fig_matrix_reps_null_im",
  "type": "Figure",
  "number": "1.13.21",
  "title": "",
  "body": " Matrix representation of null space and image   Commutative diagram including null space and image    "
},
{
  "id": "cor_inv_theorem",
  "level": "2",
  "url": "s_matrix_reps.html#cor_inv_theorem",
  "type": "Corollary",
  "number": "1.13.22",
  "title": "Invertible matrix theorem.",
  "body": " Invertible matrix theorem   Let and let be its corresponding matrix transformation. The following statements are equivalent.    is an isomorphism.               is invertible.               has a unique solution for all .     has a unique solution (viz., ).     has a solution for all .       We don't have the heart to provide a proof; this would spoil the fun of charting a path of implications around the grid above!   "
},
{
  "id": "s_change_basis",
  "level": "1",
  "url": "s_change_basis.html",
  "type": "Section",
  "number": "1.14",
  "title": "Change of basis",
  "body": " Change of basis   Coordinate vectors and matrix representations work in tandem to model vectors in an abstract vector space as column vectors in , and linear transformations as matrices. In both cases the model depends on our choice of basis. In this section we investigate how different basis choices affect these various models. Specifically, we consider the two questions below.   Given and two ordered bases and , what is the algebraic relation between and ?    Given and two ordered bases and , what is the relation between and ?     We will tackle each question in turn. Both answers rely on something called a change of basis matrix  .    Change of basis matrix   Change of basis matrix   Let and be bases for the vector space . The change of basis from to is the matrix defined as . In other words, the -th column of is obtained by computing the coordinate vector of the -th element of the original basis with respect to the new basis .     Change of basis matrix   Let , , and be bases of the finite-dimensional vector space .    .    For all we have In other words, to convert the -coordinates of a vector to -coordinates, simply multiply on the left by the matrix .  Furthermore, the matrix is the unique matrix satisfying : i.e., if for all , then .    The matrix is invertible and satisfies .    We have .          Let . From formula applied to , we see that the -th column of is for all . Using formula from this is precisely the -th column of for all . We conclude that .    This follows from (1) and : . The uniqueness claim follows from the uniqueness of matrix representations described in .    Let . For any vector , we have . Since is an isomorphism, it follows that for all , from whence it easily follows that . Thus . A similar argument shows and thus that .    Let . We show that by showing that it satisfies the defining property . For any , we have . Since satisfies the defining property of , we conclude that .        Bases in   Let , , and .   Compute .    Let . Compute using the change of basis formula .          Using , we have . The two coordinate vector computations and were done as usual using : that is, by setting up in turn the vector equations and solving for using Gaussian elimination.    The usual application of produces the coordinate vector . We leave the details to you. To compute , we use the change of basis formula : . This should come as now surprise since .        , standard basis   Consider the special situation where , is the standard basis, and is some nonstandard basis. In this case we have . In other words, is the matrix whose -th column is just the -th element of . Thus, in this situation we can compute by placing the elements of as columns of a matrix, and then use (2) of to compute .     standard basis of  The observation from applies more generally when is the standard basis of the given vector space and is nonstandard. In this case computing will be easy as the coordinate vectors can be produced by inspection. See .   We have seen that computing is easy when is a standard matrix; according to , in that situation we can then compute as the inverse of .   Change of basis, standard   Let , , . Compute and .    According to we have . We then compute .     Change of basis, standard   Let , (standard basis) and , where . Compute and .    We have . Here the coordinate vectors are easily computed by inspection since is the standard basis. It then follows that , where we've skipped the steps for computing the inverse matrix. As an aside, it turn out that there is an easy way to compute the matrix in this case due to the convenient fact that the columns of satisfy . We can say more about this when we discuss inner product spaces.     Taylor's formula for polynomials   Let , , and .   Prove that is a basis.    Compute .    Compute using .          As we have seen in homework, any tuple of polynomials with distinct degrees is linearly independent. Thus is linearly independent. Since , it is a basis. Street smarts!    We have . The first two coordinate vector computations are nontrivial; you can verify for yourself that and . Alternatively, see ) for a neat trick for computing these coordinate vectors.    Since is the standard basis, we see easily that . Using we have . Verify for yourself that we do indeed have .        Taylor's formula and change of basis  Let be the standard basis of . Fix any constant , and let . Since the elements of have distinct degrees, is linearly independent, and hence a basis (since it has the right length). It follows from Taylor's theorem (from single-variable calculus) that given any polynomial we have . We call this expression the expansion of about . In terms of coordinate vectors, this means that . In other words, Taylor's theorem provides a simple derivative formula for computing coordinate vectors with respect to the basis .   Before connecting change of basis matrices with matrix representations of linear transformations, it is worth gathering some of the different techniques for computing change of basis matrices we have discussed so far.   Change of basis computational tips   Let and be ordered bases of the vector space . Below you find a variety of techniques for computing and .   To compute directly, we must compute for each . This typically involves setting up and solving a linear system.    We have . This observation is useful in situations where (a) one change of basis matrix is easier to compute than the other and (b) computing inverse matrices is not too onerous.    If is the standard basis of , then is easy to compute. (See .)         Change of basis and matrix representations  We now investigate how our choice of basis affects matrix representations of linear transformations. We will only consider the special case where and we are comparing matrix representations and for two different ordered bases of .   Change of basis for transformations   Let be finite-dimensional, let be linear, and let and be two ordered bases for . We have , or equivalently .    First observe that follows from and (3) of . Next, to prove , it suffices by (2) of to show that the matrix satisfies for all . To this end, given any , we have .     Getting change of basis formulas correct  It is easy to get the various details of the change of basis formula wrong. Here is a potential way to keep things organized in your mind.   We wish to relate and with an equation of the form , where the asterisks are to be replaced with change of basis matrices or their inverses. Think of the three matrices on the right-hand side of this equation as a sequence of three things done to coordinate vectors, reading from right to left.     takes as inputs -coordinates of vectors, and outputs -coordinates. Thus the same should be true for .    Since takes as inputs -coordinates, we must first convert from -coordinates to -coordinates. So we should have .    Since outputs -coordinates, we need to then convert back to -coordinates. Thus .    If desired you may replace with .       Matrix representations and change of basis   The function is linear.   Compute , where is the the standard basis of .    Consider the nonstandard basis of . Compute directly using .    Now compute using and the change of basis formula .          According to , since is the standard basis of , is just the standard matrix of . This is easily computed as .    We compute directly using : . The coordinate vector computations in the last equality were all done by inspection: .    To use the change of basis formula , we need to compute and . Since is the standard basis of , using we see that we can build simply by placing the elements of in as its columns: . We then compute the inverse . Lastly, we compute , as we expected.       Consider the special case where : that is, when is a space of -tuples. We know from that for a unique matrix : the standard matrix of . The standard matrix of is useful, as it provides a convenient matrix formula for . To compute  directly using the recipe in , we must compute for each of the standard basis elements . For many naturally occurring transformations , this is often not so easy to do. provides an indirect method in such cases, as we now explain.  According to we have : , the standard matrix of is none other than the matrix representing with respect to the standard basis. This connection allows us to compute by first computing for some more convenient basis , and then using the change of basis formula.   Computing the standard matrix using change of basis   Let be a linear transformation, and let be its standard matrix. To compute using the change of basis formula , proceed as follows.   Find a convenient basis for which the action of is easily understood.    Compute .    Let be the standard basis of . Recall that . Now compute using the change of basis formula as .        is a powerful technique for computing matrix formulas for many interesting geometric linear transformations of : , rotations, reflections, and orthogonal projections. Often the very definition of such transformations will suggest a more convenient nonstandard basis : one that reflects the geometry involved. The next example illustrates this nicely.   Reflection in   Let be reflection through the line with equation : , maps a point to its reflection through . You may take for granted that is linear. (We will have a nice proof of this once we introduce inner product spaces.)   Using the geometric definition of reflection, come up with a basis such that and : the reflection  fixes  and flips  .    Show that .    Use the change of basis formula to compute , the standard matrix of .          Geometrically, reflection through the line defined by fixes any vector that points along and flips any vector that points perpendicularly to . The vector points along ; and the vector points perpendicularly to (and hence ). It follows that is a basis satisfying and .    We compute . The coordinate vectors in the last equality were computed by inspection: .    Using , we have , and thus . We conclude that .         Reflection in : general   Let be the line in passing through the origin with nonzero direction vector , and let be reflection through : , given point , is the point obtained by reflecting through .   Generalize the technique in to derive the standard matrix of .    Give the formula for and verify that it computes the reflection of and correctly.       The standard matrix of is just , where is the standard basis of . Let . Since , we have ; since is perpendicular to , we have . It follows that . Computing the relevant change of basis matrices and using the change of basis formula , we have . Since , we derive the formula for all . In particular, we have , as expected.      Similarity and the holy commutative tent of linear algebra   supplies an algebraic answer to the question: What is the relation between two matrix representations and ? Letting , equation becomes . Matrices satisfying such a relation are said to be similar .   Similar matrices  similar matrices  Matrices are similar if there is an invertible matrix such that .    So any two matrix representations of a linear transformation are similar in the technical sense of . In fact, a converse of sorts is also true, as articulated in the theorem below.   Similarity and matrix representations   Two matrices and are similar if and only if there is a linear transformation and bases of satisfying and .    The discussion above shows that if and , then , where ; thus and are similar in this case.  Now assume that and are similar. By definition this means there is an invertible matrix such that . Define as the matrix transformation . According to we have where is the standard basis of . Next, letting be the ordered basis whose -th element is the -th column of , we have ( ), and hence , as desired.    We will soon see that similar matrices are indeed similar algebraically speaking: , they share many of the same properties. provides the theoretical foundation to understand why this should be so: if and are similar, then they are two matrix representations of a common linear transformation ; their many shared properties are simply inherited from the single overlying linear transformation that they both represent! This circle of ideas is neatly encompassed by .   The holy commutative tent of linear algebra  The holy commutative tent of linear algebra. Here we have and .       Perhaps a little exegesis is in order here. Think of the map as a linear transformation up in abstract heaven; and think of the two matrices and as two earthly shadows of . OK, this gets at the holy bit somewhat, but why commutative? Each face of the tent is a commutative diagram, as we now explain.   Slanted sides of the tent  The commutativity of the two slanted sides of the tent is a consequence of : .    Triangular ends of the tent  Let , so that . The commutativity of the two triangular ends of the tent are consequences of : .    Base of tent  Lastly the commutativity of the base of the tent is a consequence of : or equivalently, .   In summary, the holy commutative tent conveys a close connection between the three maps . Since the base of the tent is commutative, and since the maps given by and are invertible, we can translate back and forth between the matrices and . Furthermore, since the two slanted sides of the tent are commutative, and since the coordinate vector transformations are invertible, we can translate up and down between our two matrix representations and and the overlying linear transformation . There is one true !   Similar matrices mantra   Similar matrices are but two earthly representations of the one true !     "
},
{
  "id": "d_change_basis_matrix",
  "level": "2",
  "url": "s_change_basis.html#d_change_basis_matrix",
  "type": "Definition",
  "number": "1.14.1",
  "title": "Change of basis matrix.",
  "body": " Change of basis matrix   Let and be bases for the vector space . The change of basis from to is the matrix defined as . In other words, the -th column of is obtained by computing the coordinate vector of the -th element of the original basis with respect to the new basis .   "
},
{
  "id": "th_change_basis_props",
  "level": "2",
  "url": "s_change_basis.html#th_change_basis_props",
  "type": "Theorem",
  "number": "1.14.2",
  "title": "Change of basis matrix.",
  "body": " Change of basis matrix   Let , , and be bases of the finite-dimensional vector space .    .    For all we have In other words, to convert the -coordinates of a vector to -coordinates, simply multiply on the left by the matrix .  Furthermore, the matrix is the unique matrix satisfying : i.e., if for all , then .    The matrix is invertible and satisfies .    We have .          Let . From formula applied to , we see that the -th column of is for all . Using formula from this is precisely the -th column of for all . We conclude that .    This follows from (1) and : . The uniqueness claim follows from the uniqueness of matrix representations described in .    Let . For any vector , we have . Since is an isomorphism, it follows that for all , from whence it easily follows that . Thus . A similar argument shows and thus that .    Let . We show that by showing that it satisfies the defining property . For any , we have . Since satisfies the defining property of , we conclude that .      "
},
{
  "id": "ss_change_basis_matrix-4",
  "level": "2",
  "url": "s_change_basis.html#ss_change_basis_matrix-4",
  "type": "Example",
  "number": "1.14.3",
  "title": "Bases in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Bases in   Let , , and .   Compute .    Let . Compute using the change of basis formula .          Using , we have . The two coordinate vector computations and were done as usual using : that is, by setting up in turn the vector equations and solving for using Gaussian elimination.    The usual application of produces the coordinate vector . We leave the details to you. To compute , we use the change of basis formula : . This should come as now surprise since .      "
},
{
  "id": "eg_changebasis_standard",
  "level": "2",
  "url": "s_change_basis.html#eg_changebasis_standard",
  "type": "Example",
  "number": "1.14.4",
  "title": "<span class=\"process-math\">\\(V=F^n\\text{,}\\)<\/span> <span class=\"process-math\">\\(B\\)<\/span> standard basis.",
  "body": " , standard basis   Consider the special situation where , is the standard basis, and is some nonstandard basis. In this case we have . In other words, is the matrix whose -th column is just the -th element of . Thus, in this situation we can compute by placing the elements of as columns of a matrix, and then use (2) of to compute .   "
},
{
  "id": "rm_changebasis_standard",
  "level": "2",
  "url": "s_change_basis.html#rm_changebasis_standard",
  "type": "Remark",
  "number": "1.14.5",
  "title": "<span class=\"process-math\">\\(B\\)<\/span> standard basis of <span class=\"process-math\">\\(V\\)<\/span>.",
  "body": " standard basis of  The observation from applies more generally when is the standard basis of the given vector space and is nonstandard. In this case computing will be easy as the coordinate vectors can be produced by inspection. See .  "
},
{
  "id": "ss_change_basis_matrix-8",
  "level": "2",
  "url": "s_change_basis.html#ss_change_basis_matrix-8",
  "type": "Example",
  "number": "1.14.6",
  "title": "Change of basis, <span class=\"process-math\">\\(B\\)<\/span> standard.",
  "body": " Change of basis, standard   Let , , . Compute and .    According to we have . We then compute .   "
},
{
  "id": "eg_changebasis_standard_mat",
  "level": "2",
  "url": "s_change_basis.html#eg_changebasis_standard_mat",
  "type": "Example",
  "number": "1.14.7",
  "title": "Change of basis, <span class=\"process-math\">\\(B\\)<\/span> standard.",
  "body": " Change of basis, standard   Let , (standard basis) and , where . Compute and .    We have . Here the coordinate vectors are easily computed by inspection since is the standard basis. It then follows that , where we've skipped the steps for computing the inverse matrix. As an aside, it turn out that there is an easy way to compute the matrix in this case due to the convenient fact that the columns of satisfy . We can say more about this when we discuss inner product spaces.   "
},
{
  "id": "ss_change_basis_matrix-10",
  "level": "2",
  "url": "s_change_basis.html#ss_change_basis_matrix-10",
  "type": "Example",
  "number": "1.14.8",
  "title": "Taylor’s formula for polynomials.",
  "body": " Taylor's formula for polynomials   Let , , and .   Prove that is a basis.    Compute .    Compute using .          As we have seen in homework, any tuple of polynomials with distinct degrees is linearly independent. Thus is linearly independent. Since , it is a basis. Street smarts!    We have . The first two coordinate vector computations are nontrivial; you can verify for yourself that and . Alternatively, see ) for a neat trick for computing these coordinate vectors.    Since is the standard basis, we see easily that . Using we have . Verify for yourself that we do indeed have .      "
},
{
  "id": "rm_change_of_basis_taylors",
  "level": "2",
  "url": "s_change_basis.html#rm_change_of_basis_taylors",
  "type": "Remark",
  "number": "1.14.9",
  "title": "Taylor’s formula and change of basis.",
  "body": " Taylor's formula and change of basis  Let be the standard basis of . Fix any constant , and let . Since the elements of have distinct degrees, is linearly independent, and hence a basis (since it has the right length). It follows from Taylor's theorem (from single-variable calculus) that given any polynomial we have . We call this expression the expansion of about . In terms of coordinate vectors, this means that . In other words, Taylor's theorem provides a simple derivative formula for computing coordinate vectors with respect to the basis .  "
},
{
  "id": "proc_changebasis_tips",
  "level": "2",
  "url": "s_change_basis.html#proc_changebasis_tips",
  "type": "Procedure",
  "number": "1.14.10",
  "title": "Change of basis computational tips.",
  "body": " Change of basis computational tips   Let and be ordered bases of the vector space . Below you find a variety of techniques for computing and .   To compute directly, we must compute for each . This typically involves setting up and solving a linear system.    We have . This observation is useful in situations where (a) one change of basis matrix is easier to compute than the other and (b) computing inverse matrices is not too onerous.    If is the standard basis of , then is easy to compute. (See .)      "
},
{
  "id": "th_change_of_basis_transformations",
  "level": "2",
  "url": "s_change_basis.html#th_change_of_basis_transformations",
  "type": "Theorem",
  "number": "1.14.11",
  "title": "Change of basis for transformations.",
  "body": " Change of basis for transformations   Let be finite-dimensional, let be linear, and let and be two ordered bases for . We have , or equivalently .    First observe that follows from and (3) of . Next, to prove , it suffices by (2) of to show that the matrix satisfies for all . To this end, given any , we have .   "
},
{
  "id": "rm_change_of_basis_transformations",
  "level": "2",
  "url": "s_change_basis.html#rm_change_of_basis_transformations",
  "type": "Remark",
  "number": "1.14.12",
  "title": "Getting change of basis formulas correct.",
  "body": " Getting change of basis formulas correct  It is easy to get the various details of the change of basis formula wrong. Here is a potential way to keep things organized in your mind.   We wish to relate and with an equation of the form , where the asterisks are to be replaced with change of basis matrices or their inverses. Think of the three matrices on the right-hand side of this equation as a sequence of three things done to coordinate vectors, reading from right to left.     takes as inputs -coordinates of vectors, and outputs -coordinates. Thus the same should be true for .    Since takes as inputs -coordinates, we must first convert from -coordinates to -coordinates. So we should have .    Since outputs -coordinates, we need to then convert back to -coordinates. Thus .    If desired you may replace with .     "
},
{
  "id": "ss_change_basis_transformation-5",
  "level": "2",
  "url": "s_change_basis.html#ss_change_basis_transformation-5",
  "type": "Example",
  "number": "1.14.13",
  "title": "Matrix representations and change of basis.",
  "body": " Matrix representations and change of basis   The function is linear.   Compute , where is the the standard basis of .    Consider the nonstandard basis of . Compute directly using .    Now compute using and the change of basis formula .          According to , since is the standard basis of , is just the standard matrix of . This is easily computed as .    We compute directly using : . The coordinate vector computations in the last equality were all done by inspection: .    To use the change of basis formula , we need to compute and . Since is the standard basis of , using we see that we can build simply by placing the elements of in as its columns: . We then compute the inverse . Lastly, we compute , as we expected.      "
},
{
  "id": "proc_standard_matrix_via_change_of_basis",
  "level": "2",
  "url": "s_change_basis.html#proc_standard_matrix_via_change_of_basis",
  "type": "Procedure",
  "number": "1.14.14",
  "title": "Computing the standard matrix using change of basis.",
  "body": " Computing the standard matrix using change of basis   Let be a linear transformation, and let be its standard matrix. To compute using the change of basis formula , proceed as follows.   Find a convenient basis for which the action of is easily understood.    Compute .    Let be the standard basis of . Recall that . Now compute using the change of basis formula as .      "
},
{
  "id": "eg_changebasis_reflection",
  "level": "2",
  "url": "s_change_basis.html#eg_changebasis_reflection",
  "type": "Example",
  "number": "1.14.15",
  "title": "Reflection in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Reflection in   Let be reflection through the line with equation : , maps a point to its reflection through . You may take for granted that is linear. (We will have a nice proof of this once we introduce inner product spaces.)   Using the geometric definition of reflection, come up with a basis such that and : the reflection  fixes  and flips  .    Show that .    Use the change of basis formula to compute , the standard matrix of .          Geometrically, reflection through the line defined by fixes any vector that points along and flips any vector that points perpendicularly to . The vector points along ; and the vector points perpendicularly to (and hence ). It follows that is a basis satisfying and .    We compute . The coordinate vectors in the last equality were computed by inspection: .    Using , we have , and thus . We conclude that .       "
},
{
  "id": "eg_changebasis_reflection_gen",
  "level": "2",
  "url": "s_change_basis.html#eg_changebasis_reflection_gen",
  "type": "Example",
  "number": "1.14.16",
  "title": "Reflection in <span class=\"process-math\">\\(\\R^2\\text{:}\\)<\/span> general.",
  "body": " Reflection in : general   Let be the line in passing through the origin with nonzero direction vector , and let be reflection through : , given point , is the point obtained by reflecting through .   Generalize the technique in to derive the standard matrix of .    Give the formula for and verify that it computes the reflection of and correctly.       The standard matrix of is just , where is the standard basis of . Let . Since , we have ; since is perpendicular to , we have . It follows that . Computing the relevant change of basis matrices and using the change of basis formula , we have . Since , we derive the formula for all . In particular, we have , as expected.   "
},
{
  "id": "d_similar",
  "level": "2",
  "url": "s_change_basis.html#d_similar",
  "type": "Definition",
  "number": "1.14.17",
  "title": "Similar matrices.",
  "body": " Similar matrices  similar matrices  Matrices are similar if there is an invertible matrix such that .   "
},
{
  "id": "th_similarity_matrixreps",
  "level": "2",
  "url": "s_change_basis.html#th_similarity_matrixreps",
  "type": "Theorem",
  "number": "1.14.18",
  "title": "Similarity and matrix representations.",
  "body": " Similarity and matrix representations   Two matrices and are similar if and only if there is a linear transformation and bases of satisfying and .    The discussion above shows that if and , then , where ; thus and are similar in this case.  Now assume that and are similar. By definition this means there is an invertible matrix such that . Define as the matrix transformation . According to we have where is the standard basis of . Next, letting be the ordered basis whose -th element is the -th column of , we have ( ), and hence , as desired.   "
},
{
  "id": "fig_comm_tent",
  "level": "2",
  "url": "s_change_basis.html#fig_comm_tent",
  "type": "Figure",
  "number": "1.14.19",
  "title": "The holy commutative tent of linear algebra",
  "body": " The holy commutative tent of linear algebra  The holy commutative tent of linear algebra. Here we have and .      "
},
{
  "id": "princ_similar_matrices",
  "level": "2",
  "url": "s_change_basis.html#princ_similar_matrices",
  "type": "Mantra",
  "number": "1.14.20",
  "title": "Similar matrices mantra.",
  "body": " Similar matrices mantra   Similar matrices are but two earthly representations of the one true !   "
},
{
  "id": "s_eigenvector",
  "level": "1",
  "url": "s_eigenvector.html",
  "type": "Section",
  "number": "1.15",
  "title": "Eigenvectors",
  "body": " Eigenvectors   For the rest of this course we will focus our investigation on linear transformations of the form : that is, transformations from a space into itself. When is finite-dimensional we can get a computational grip on by choosing an ordered basis and considering the matrix representation . As was illustrated in , different matrix representations and provide different insights into the nature of . Furthermore, we see from this example that if the action of on a chosen basis is simple to describe, then so too is the matrix representation of with respect to that basis.  A particularly agreeable situation arises when the basis satisfies for all . Using recipe we in this case that the corresponding matrix representation is diagonal! Diagonal matrices are about as simple as they come: they wear all of their properties (rank, nullity, invertibility, ) on their sleeve. If we hope to find a diagonal matrix representation of , then we should seek nonzero vectors satisfying for some : these are called eigenvectors of .    Definition and examples   Henceforth we will focus on the study of linear transformations from a vector space to itself . Recall that in this setting we denote and (in the case where has a finite basis ). Furthermore, we call a linear transformation a linear operator on .    eigenvector  eigenvalue  Eigenvectors and eigenvalues   Let be a linear transformation. A nonzero vector satisfying for some is called an eigenvector of with eigenvalue  , or more concisely, a -eigenvector .     Eigenvectors of matrix transformations  Let be a square matrix. As a form of conflation of with its corresponding matrix transformation , we will call an eigenvector of if it is an eigenvalue of ; similarly, we will call an eigenvalue of if it is an eigenvalue of .    You ask: Why use instead of or ? My answer: tradition!    Note well the important condition that an eigenvector must be nonzero. This means the zero vector by definition is not an eigenvector. If we allowed as an eigenvector, then the notion of the eigenvalue of an eigenvector would no longer be well-defined. This is because for any linear transformation we have which implies that for all .    Dilations, zero and identity transformations   Assume is nonzero. Recall that given a scalar , we define the dilation as for all . Note that the zero transformation and identity transformation are examples of dilations, taking and , respectively.  Find all eigenvalues and eigenvectors of a dilation .    Since for all , we see that all nonzero vectors are eigenvectors of eigenvalue , and thus that is the only eigenvalue of .  In particular, consider the cases and , we see that is the only eigenvalue of the zero transformation, and is the only eigenvalue of the identity transformation.     Reflection   Let be a line in passing through the origin, and define to be reflection through . (See .) Find all eigenvectors and eigenvalues of . Use a geometric argument. You may assume that is linear.    Since the reflection operator fixes all elements of the line , we have for any . This shows that any nonzero element of is an eigenvectors of with eigenvalue .  Similarly, since is orthogonal to , reflection through takes any element and maps it to . Thus any nonzero element is an eigenvector of with eigenvalue .  We claim that these two cases exhaust all eigenvectors of . Indeed, in general a nonzero vector lies in the line , and its reflection lies in the line , which itself is the result of reflecting the line through . Now assume . We must have , since if ; but if it follows that the line and its reflection are equal. Clearly the only lines that are mapped to themselves by reflection through are and . Thus if is an eigenvector of it must lie in or .     Rotation in   Fix an angle and consider the linear transformation , where . Geometrically, is rotation by about the origin. Find all eigenvalues and eigenvectors of . You should treat three separate cases: , , .         Transposition   Consider the linear transformation . Determine all eigenvectors and eigenvalues of .    To be an eigenvector of a nonzero matrix must satisfy for some . Using the definition of , this means . We ask for which scalars does there exist a nonzero matrix satisfying . Let's consider some specific choices of .   Case:  In this case reads . Thus the eigenvectors of with eigenvalue are precisely the nonzero symmetric matrices: , .    Case:  For this choice of we seek nonzero matrices satisfying . These are precisely the nonzero skew-symmetric matrices: , .    Case:  Suppose satisfies . Equating the entries of these two matrices yields the system . The first two equations imply , using the fact that . The second two equations imply further that and . Since , . It follows that . We conclude that for , if , then . It follows that is not an eigenvalue of in this case.   In summation, our analysis shows that the transposition operator has exactly two eigenvalues, and , that the eigenvectors of with eigenvalue 1 are the nonzero symmetric matrices, and that the eigenvalues of with eigenvalue are the nonzero skew-symmetric matrices.     Differentiation   Let be defined as . Find all eigenvalues and eigenvectors of .    An eigenvector of is a nonzero function satisfying for some . By definition, this means for some . Thus is an eigenvalue of if and only if the differential equation has a nonzero solution. This is true for all ! Indeed for any the exponential function satisfies for all . Furthermore, any solution to is of the form for some . We conclude that (a) every is an eigenvalue of , and (b) for a given , the -eigenvectors of are precisely the functions of the form for some .      Eigenspaces  The next theorem and its corollary turn out to be crucial for computing eigenvalues and eigenvectors. They are simple consequences of the observation that satisfies if and only if .   Eigenvalues and null spaces   Let , and let . The following statements are equivalent.    is an eigenvalue of .     is not injective.     .       We have .    The following corollary elaborates on in the special case where is finite dimensional.    Let be finite dimensional, let , and let . The following statements are equivalent.    is an eigenvalue of .     is not injective. (Equivalently, .)     is not surjective. (Equivalently, .)     is not invertible.       Let . The additional equivalent statements we obtain when are the result of the fact (special to this setting) that is invertible if and only if it is injective if and only if it is surjective.    From and its proof, we see that the -eigenvectors of a linear operator are precisely the nonzero elements of . This motivates the following definition.   Eigenspaces   Let . For all we define the -eigenspace of , denoted , as . Note that the nonzero elements of are precisely the -eigenvectors of , and in particular, that is an eigenvalue of if and only if is a nonzero subspace of .     Eigenspaces as packets of eigenvectors  It is important to realize that if is an eigenvalue of a linear operator , then there is not just one -eigenvector, but rather an entire subspace of eigenvectors: that is, each of the nonzero elements of is an eigenvector with eigenvalue . Thus every linear operator has associated to it various packets of eigenvectors of varying size, as measured by .    Eigenspaces of transposition   Let be defined as . From our analysis in we see that the eigenspaces of are described as follows: . Since and are the only nonzero eigenspaces of , we see (again) that and are the only eigenvalues of .     Eigenspaces of differentiation   Let be an interval in , and let be defined as . From our analysis in we conclude that for all , we have , where . Since for all , we see that each eigenspace of is 1-dimensional, spanned by . Thus the eigenvectors of are packaged in the uncountably many eigenspaces .     "
},
{
  "id": "ss_eigenvectors-2",
  "level": "2",
  "url": "s_eigenvector.html#ss_eigenvectors-2",
  "type": "Convention",
  "number": "1.15.1",
  "title": "",
  "body": " Henceforth we will focus on the study of linear transformations from a vector space to itself . Recall that in this setting we denote and (in the case where has a finite basis ). Furthermore, we call a linear transformation a linear operator on .  "
},
{
  "id": "d_eigenvectors",
  "level": "2",
  "url": "s_eigenvector.html#d_eigenvectors",
  "type": "Definition",
  "number": "1.15.2",
  "title": "Eigenvectors and eigenvalues.",
  "body": " eigenvector  eigenvalue  Eigenvectors and eigenvalues   Let be a linear transformation. A nonzero vector satisfying for some is called an eigenvector of with eigenvalue  , or more concisely, a -eigenvector .   "
},
{
  "id": "ss_eigenvectors-4",
  "level": "2",
  "url": "s_eigenvector.html#ss_eigenvectors-4",
  "type": "Convention",
  "number": "1.15.3",
  "title": "Eigenvectors of matrix transformations.",
  "body": " Eigenvectors of matrix transformations  Let be a square matrix. As a form of conflation of with its corresponding matrix transformation , we will call an eigenvector of if it is an eigenvalue of ; similarly, we will call an eigenvalue of if it is an eigenvalue of .  "
},
{
  "id": "rm_eigenvector_lambda",
  "level": "2",
  "url": "s_eigenvector.html#rm_eigenvector_lambda",
  "type": "Remark",
  "number": "1.15.4",
  "title": "",
  "body": " You ask: Why use instead of or ? My answer: tradition!  "
},
{
  "id": "rm_eigenvector_nonzero",
  "level": "2",
  "url": "s_eigenvector.html#rm_eigenvector_nonzero",
  "type": "Remark",
  "number": "1.15.5",
  "title": "",
  "body": " Note well the important condition that an eigenvector must be nonzero. This means the zero vector by definition is not an eigenvector. If we allowed as an eigenvector, then the notion of the eigenvalue of an eigenvector would no longer be well-defined. This is because for any linear transformation we have which implies that for all .  "
},
{
  "id": "eg_eigenvectors_zerotransform",
  "level": "2",
  "url": "s_eigenvector.html#eg_eigenvectors_zerotransform",
  "type": "Example",
  "number": "1.15.6",
  "title": "Dilations, zero and identity transformations.",
  "body": " Dilations, zero and identity transformations   Assume is nonzero. Recall that given a scalar , we define the dilation as for all . Note that the zero transformation and identity transformation are examples of dilations, taking and , respectively.  Find all eigenvalues and eigenvectors of a dilation .    Since for all , we see that all nonzero vectors are eigenvectors of eigenvalue , and thus that is the only eigenvalue of .  In particular, consider the cases and , we see that is the only eigenvalue of the zero transformation, and is the only eigenvalue of the identity transformation.   "
},
{
  "id": "eg_eigenvector_adhoc_reflection",
  "level": "2",
  "url": "s_eigenvector.html#eg_eigenvector_adhoc_reflection",
  "type": "Example",
  "number": "1.15.7",
  "title": "Reflection.",
  "body": " Reflection   Let be a line in passing through the origin, and define to be reflection through . (See .) Find all eigenvectors and eigenvalues of . Use a geometric argument. You may assume that is linear.    Since the reflection operator fixes all elements of the line , we have for any . This shows that any nonzero element of is an eigenvectors of with eigenvalue .  Similarly, since is orthogonal to , reflection through takes any element and maps it to . Thus any nonzero element is an eigenvector of with eigenvalue .  We claim that these two cases exhaust all eigenvectors of . Indeed, in general a nonzero vector lies in the line , and its reflection lies in the line , which itself is the result of reflecting the line through . Now assume . We must have , since if ; but if it follows that the line and its reflection are equal. Clearly the only lines that are mapped to themselves by reflection through are and . Thus if is an eigenvector of it must lie in or .   "
},
{
  "id": "eg_eigenvector_rotation",
  "level": "2",
  "url": "s_eigenvector.html#eg_eigenvector_rotation",
  "type": "Example",
  "number": "1.15.8",
  "title": "Rotation in <span class=\"process-math\">\\(\\R^2\\)<\/span>.",
  "body": " Rotation in   Fix an angle and consider the linear transformation , where . Geometrically, is rotation by about the origin. Find all eigenvalues and eigenvectors of . You should treat three separate cases: , , .       "
},
{
  "id": "eg_eigenvector_adhoc_transposition",
  "level": "2",
  "url": "s_eigenvector.html#eg_eigenvector_adhoc_transposition",
  "type": "Example",
  "number": "1.15.9",
  "title": "Transposition.",
  "body": " Transposition   Consider the linear transformation . Determine all eigenvectors and eigenvalues of .    To be an eigenvector of a nonzero matrix must satisfy for some . Using the definition of , this means . We ask for which scalars does there exist a nonzero matrix satisfying . Let's consider some specific choices of .   Case:  In this case reads . Thus the eigenvectors of with eigenvalue are precisely the nonzero symmetric matrices: , .    Case:  For this choice of we seek nonzero matrices satisfying . These are precisely the nonzero skew-symmetric matrices: , .    Case:  Suppose satisfies . Equating the entries of these two matrices yields the system . The first two equations imply , using the fact that . The second two equations imply further that and . Since , . It follows that . We conclude that for , if , then . It follows that is not an eigenvalue of in this case.   In summation, our analysis shows that the transposition operator has exactly two eigenvalues, and , that the eigenvectors of with eigenvalue 1 are the nonzero symmetric matrices, and that the eigenvalues of with eigenvalue are the nonzero skew-symmetric matrices.   "
},
{
  "id": "eg_eigenvectors_adhoc_derivative",
  "level": "2",
  "url": "s_eigenvector.html#eg_eigenvectors_adhoc_derivative",
  "type": "Example",
  "number": "1.15.10",
  "title": "Differentiation.",
  "body": " Differentiation   Let be defined as . Find all eigenvalues and eigenvectors of .    An eigenvector of is a nonzero function satisfying for some . By definition, this means for some . Thus is an eigenvalue of if and only if the differential equation has a nonzero solution. This is true for all ! Indeed for any the exponential function satisfies for all . Furthermore, any solution to is of the form for some . We conclude that (a) every is an eigenvalue of , and (b) for a given , the -eigenvectors of are precisely the functions of the form for some .   "
},
{
  "id": "th_eigenvalues",
  "level": "2",
  "url": "s_eigenvector.html#th_eigenvalues",
  "type": "Theorem",
  "number": "1.15.11",
  "title": "Eigenvalues and null spaces.",
  "body": " Eigenvalues and null spaces   Let , and let . The following statements are equivalent.    is an eigenvalue of .     is not injective.     .       We have .   "
},
{
  "id": "cor_eigenvalues",
  "level": "2",
  "url": "s_eigenvector.html#cor_eigenvalues",
  "type": "Corollary",
  "number": "1.15.12",
  "title": "",
  "body": "  Let be finite dimensional, let , and let . The following statements are equivalent.    is an eigenvalue of .     is not injective. (Equivalently, .)     is not surjective. (Equivalently, .)     is not invertible.       Let . The additional equivalent statements we obtain when are the result of the fact (special to this setting) that is invertible if and only if it is injective if and only if it is surjective.   "
},
{
  "id": "d_eigenspaces",
  "level": "2",
  "url": "s_eigenvector.html#d_eigenspaces",
  "type": "Definition",
  "number": "1.15.13",
  "title": "Eigenspaces.",
  "body": " Eigenspaces   Let . For all we define the -eigenspace of , denoted , as . Note that the nonzero elements of are precisely the -eigenvectors of , and in particular, that is an eigenvalue of if and only if is a nonzero subspace of .   "
},
{
  "id": "rm_eigenspaces",
  "level": "2",
  "url": "s_eigenvector.html#rm_eigenspaces",
  "type": "Remark",
  "number": "1.15.14",
  "title": "Eigenspaces as packets of eigenvectors.",
  "body": " Eigenspaces as packets of eigenvectors  It is important to realize that if is an eigenvalue of a linear operator , then there is not just one -eigenvector, but rather an entire subspace of eigenvectors: that is, each of the nonzero elements of is an eigenvector with eigenvalue . Thus every linear operator has associated to it various packets of eigenvectors of varying size, as measured by .  "
},
{
  "id": "eg_transposition_eigenspace",
  "level": "2",
  "url": "s_eigenvector.html#eg_transposition_eigenspace",
  "type": "Example",
  "number": "1.15.15",
  "title": "Eigenspaces of transposition.",
  "body": " Eigenspaces of transposition   Let be defined as . From our analysis in we see that the eigenspaces of are described as follows: . Since and are the only nonzero eigenspaces of , we see (again) that and are the only eigenvalues of .   "
},
{
  "id": "eg_diff_eigenspace",
  "level": "2",
  "url": "s_eigenvector.html#eg_diff_eigenspace",
  "type": "Example",
  "number": "1.15.16",
  "title": "Eigenspaces of differentiation.",
  "body": " Eigenspaces of differentiation   Let be an interval in , and let be defined as . From our analysis in we conclude that for all , we have , where . Since for all , we see that each eigenspace of is 1-dimensional, spanned by . Thus the eigenvectors of are packaged in the uncountably many eigenspaces .   "
},
{
  "id": "s_char_poly",
  "level": "1",
  "url": "s_char_poly.html",
  "type": "Section",
  "number": "1.16",
  "title": "Characteristic polynomial",
  "body": " Characteristic polynomial   In this section we introduce a valuable computational tool, the characteristic polynomial , that will help us determine the eigenvalues of a linear operator on a finite-dimensional space. The definition of the characteristic polynomial makes use of the determinant of a matrix. You can find a detailed treatment of the determinant in Section 2.5 of my first course in linear algebra textbook . Our introduction of the determinant at this point marks a major divergence from Axler's exposition in Linear algebra done right , which deliberately avoids using the determinant to push the theory of eigenspaces forward. Are we engaging here in some naughtiness; perhaps pursuing a linear algebra done wrong ? I don't think so. Personally, I find the theory of determinants quite elegant, and the characteristic polynomial will allow us to compute interesting examples in the small-dimensional case. In the words of the great Luther Ingram, if loving you is wrong, I don't want to be right .     Computing eigenspaces  The overarching goal of this section is to develop computational techniques for (a) determining all eigenvalues of a linear operator , and (b) for each eigenvalue compute a basis for . We will only describe a systematic approach in the case where is a linear operator on a finite-dimensional vector space . In this case, it turns out that the computations for can be reduced to the analogous computations for for any choice of basis . This is articulated in the next theorem, and nicely summarized by .   Eigenspaces and matrix representations   Let , where , let be a basis for , and let .    is an eigenvalue of if and only if is an eigenvalue of .    For all , the restriction of the coordinate vector map to yields an isomorphism . As a result we can produce a basis of by computing a basis of and lifting this to a basis of using the inverse coordinate map .       Since is an eigenvalue of (resp., ) if and only if (resp., )) is nonzero, we see that (1) follows directly from (2).  Furthermore, since , statement (2) follows from (applied to and ) and the fact that .     Matrix representations and eigenspaces: . The coordinate vector map defines an isomorphism between and .   Commutative diagram relating eigenspaces of T and its matrix representation       Characteristic polynomial  Given a finite-dimensional space and linear operator , reduces the computation of eigenspaces of to the computation of eigenspaces of the matrix transformation , where is any matrix representation of . The question thus becomes, how do we compute the eigenspaces of a matrix transformation ? We tackle this question now, beginning with a tool that allows us to find the eigenvalues of .   Characteristic polynomial of a matrix   Let . The characteristic polynomial of is the function defined as .    The next theorem illustrates how the characteristic polynomial can be used to find eigenvalues of . It also lists some additional useful properties of , one of which involves the trace of a matrix.   Trace of a matrix   Let . The trace  of is the sum of its diagonal entries: , .     Characteristic polynomial of a matrix   Let , and let be its characteristic polynomial.    is an eigenvalue of if and only if .     is a monic polynomial of degree , and we have , where .    If for some invertible matrix , then and have the same characteristic polynomial. In other words, similar matrices have the same characteristic polynomial.          We have .    This proved by induction on , using various properties of the determinant. You can find a proof of this in my textbook for a first course in linear algebra .    Let and be the characteristic polynomials of and , respectively. We have , as claimed.       We will soon proceed to examples illustrating how statement (1) of allows us to find all the eigenvalues of a given linear operator. Before getting to those examples, we first observe that statement (3) allows us to define in a well-defined manner the characteristic polynomial of a general linear operator of a finite-dimensional vector space. We state the definition first, and then justify its well-definedness in the remark that follows.   Characteristic polynomial of operator   Let , where . We define the characteristic polynomial of to be the characteristic polynomial of , where is any basis of .     Characteristic polynomial is well-defined  Why is well-defined? That is, suppose I choose basis and matrix representation to compute the characteristic polynomial of , and you choose basis and matrix representation ; why do we both get the same characteristic polynomial? We are saved by the change of basis for transformations formula and (3) of . Indeed letting (my matrix representation) and (your matrix representation), we have , where . This shows that and are similar ( ), and hence that they have the same characteristic polynomial by (3) of .  Lastly, observe that according to , the characteristic polynomial of a matrix transformation is the characteristic polynomial of the matrix , as defined in . This is because , where is the standard basis of .   Now that we have generalized the definition of characteristic polynomial to a general linear operator of a finite-dimensional vector space, we make official its relation ship to the eigenvalues of .   Characteristic polynomial of operator   Let , where , and let be the characteristic polynomial of .   The polynomial can be factored over as , where for all , for , and is a polynomial with no roots in . It follows that are the distinct eigenvalues of .     has at most distinct eigenvalues.          Let be any matrix representation of . We know from that the eigenvalues of are precisely the eigenvalues of . Furthermore, by , the eigenvalues of are precisely the roots of lying in the base field . Elementary polynomial properties imply that a scalar is a root of if and only if we can factor as , where the quotient  is a polynomial of degree . Continuing this factoring out of roots process until the quotient polynomial has no roots in , we see that we can factor as in . From that factorization, we see that are the distinct roots of , and hence the distinct eigenvalues of .    As we have mentioned before, a polynomial in of degree can have at most distinct roots in . Thus the characteristic polynomial of can have at most distinct roots in , from which it follows that can have at most distinct eigenvalues.       At last we proceed to some examples, beginning with some familiar friends from the previous section.   Reflection, again   Let be a nonzero element of , let , and let be reflection through . We saw in that , where .   Compute the characteristic polynomial of .    Find all eigenvalues of .          Instead of computing directly, we make use of statement (2) of : . In computing above, we make use of the fact that for an matrix as follows: .    Since factors as , we see that the only eigenvalues of are and .        Rotation (again)   Fix an angle , and let . As mentioned earlier, the linear operator is rotation about the origin by the angle .   Compute the characteristic polynomial of .    Find all eigenvalues of . Consider the cases , , and separately.       The characteristic polynomial of is . We can use the quadratic formula to find the real roots of : . When , this reduces to ; similarly, when , this reduces to . This confirms our our conclusion in that when the only eigenvalue of is ; and that when , the only eigenvalue of is .  When , and we see that has no real roots. This confirms our conclusion in that such rotations have no eigenvalues.    Since , and hence for any positive integer , any matrix with real coefficients can also be considered as a a matrix with complex coefficients:  . In this situation there are two different linear transformations we can associate to : . By abuse of notation, we denote both of these transformations as , but as the next example illustrates, these two transformations can be very different in nature.   Complex matrix transformation   Let , let , and let be the corresponding matrix transformation.   Compute the characteristic polynomial of .    Determine the eigenvalue of .          We compute the characteristic polynomial , exactly as in .    Using the complex version of the quadratic formula, we can factor over as , where . Note that since we have , from whence it follows that the two complex square-roots of are and . Using the Euler formula , we can further express these eigenvalues as . Finally, observe that in contrast to the linear operator , which has no eigenvalues ( ), the linear operator has two distinct (non-real) eigenvalues.       Our last example illustrates how a characteristic polynomial may not factor completely over the base field . In this example we also compute bases for each eigenspace of the linear operator .   Compute eigenspaces   Let be the matrix transformation , where . The characteristic polynomial of is is .   Find all eigenvalues of .    For each eigenvalue compute a basis for the eigenspace .          To find the eigenvalues of we must factor the polynomial . We first look for integer roots that divide the constant term . We see that , and thus that is a factor of . Using polynomial long division, we see that . Continuing this process with the cubic polynomial, we factor . Since is irreducible over , we can factor no further. The factorization , tells us that the eigenvalues of are and .     Basis of  We have . We conclude that is a basis of .    Basis of  We have . We conclude that is a basis of .          Computing eigenspaces  We end this section by bringing together and to give a complete procedure for finding all eigenvalues of a linear operator on a finite-dimensional space, and then computing bases for the eigenspaces of each of those eigenvalues.   Computing eigenspaces of operators   Let , where . To compute the eigenvalues and eigenspaces of , proceed as follows.   Pick any basis of and compute .    Compute , the characteristic polynomial of and factor as in to find the distinct eigenvalues of .    For each compute a basis of using the null space algorithm for matrices.    For each , lift the basis of to a basis of using the inverse coordinate map .        Transposition (again)   Let be defined as .   Find all eigenvalues of .    For each eigenvalue of compute a basis for .       Let , the standard basis of . We let , where . Now compute the the eigenvalues and eigenspaces of . We leave it to you to verify that . We conclude that and are the only eigenvalues of (and hence also ). Bases for the corresponding eigenspaces of are readily computed (using the null space algorithm for matrices) as . Now lift these up to bases of the eigenspaces and of : . It is easy to see that and are the subspaces of symmetric and skew-symmetric matrices, respectively. This is consistent with our analysis in .     "
},
{
  "id": "th_matrixreps_eigenspace",
  "level": "2",
  "url": "s_char_poly.html#th_matrixreps_eigenspace",
  "type": "Theorem",
  "number": "1.16.1",
  "title": "Eigenspaces and matrix representations.",
  "body": " Eigenspaces and matrix representations   Let , where , let be a basis for , and let .    is an eigenvalue of if and only if is an eigenvalue of .    For all , the restriction of the coordinate vector map to yields an isomorphism . As a result we can produce a basis of by computing a basis of and lifting this to a basis of using the inverse coordinate map .       Since is an eigenvalue of (resp., ) if and only if (resp., )) is nonzero, we see that (1) follows directly from (2).  Furthermore, since , statement (2) follows from (applied to and ) and the fact that .   "
},
{
  "id": "fig_matrix_reps_eigen",
  "level": "2",
  "url": "s_char_poly.html#fig_matrix_reps_eigen",
  "type": "Figure",
  "number": "1.16.2",
  "title": "",
  "body": " Matrix representations and eigenspaces: . The coordinate vector map defines an isomorphism between and .   Commutative diagram relating eigenspaces of T and its matrix representation    "
},
{
  "id": "d_char_poly_matrix",
  "level": "2",
  "url": "s_char_poly.html#d_char_poly_matrix",
  "type": "Definition",
  "number": "1.16.3",
  "title": "Characteristic polynomial of a matrix.",
  "body": " Characteristic polynomial of a matrix   Let . The characteristic polynomial of is the function defined as .   "
},
{
  "id": "d_trace",
  "level": "2",
  "url": "s_char_poly.html#d_trace",
  "type": "Definition",
  "number": "1.16.4",
  "title": "Trace of a matrix.",
  "body": " Trace of a matrix   Let . The trace  of is the sum of its diagonal entries: , .   "
},
{
  "id": "th_char_poly",
  "level": "2",
  "url": "s_char_poly.html#th_char_poly",
  "type": "Theorem",
  "number": "1.16.5",
  "title": "Characteristic polynomial of a matrix.",
  "body": " Characteristic polynomial of a matrix   Let , and let be its characteristic polynomial.    is an eigenvalue of if and only if .     is a monic polynomial of degree , and we have , where .    If for some invertible matrix , then and have the same characteristic polynomial. In other words, similar matrices have the same characteristic polynomial.          We have .    This proved by induction on , using various properties of the determinant. You can find a proof of this in my textbook for a first course in linear algebra .    Let and be the characteristic polynomials of and , respectively. We have , as claimed.      "
},
{
  "id": "d_char_poly",
  "level": "2",
  "url": "s_char_poly.html#d_char_poly",
  "type": "Definition",
  "number": "1.16.6",
  "title": "Characteristic polynomial of operator.",
  "body": " Characteristic polynomial of operator   Let , where . We define the characteristic polynomial of to be the characteristic polynomial of , where is any basis of .   "
},
{
  "id": "ss_char_poly-9",
  "level": "2",
  "url": "s_char_poly.html#ss_char_poly-9",
  "type": "Remark",
  "number": "1.16.7",
  "title": "Characteristic polynomial is well-defined.",
  "body": " Characteristic polynomial is well-defined  Why is well-defined? That is, suppose I choose basis and matrix representation to compute the characteristic polynomial of , and you choose basis and matrix representation ; why do we both get the same characteristic polynomial? We are saved by the change of basis for transformations formula and (3) of . Indeed letting (my matrix representation) and (your matrix representation), we have , where . This shows that and are similar ( ), and hence that they have the same characteristic polynomial by (3) of .  Lastly, observe that according to , the characteristic polynomial of a matrix transformation is the characteristic polynomial of the matrix , as defined in . This is because , where is the standard basis of .  "
},
{
  "id": "th_char_poly_operator",
  "level": "2",
  "url": "s_char_poly.html#th_char_poly_operator",
  "type": "Theorem",
  "number": "1.16.8",
  "title": "Characteristic polynomial of operator.",
  "body": " Characteristic polynomial of operator   Let , where , and let be the characteristic polynomial of .   The polynomial can be factored over as , where for all , for , and is a polynomial with no roots in . It follows that are the distinct eigenvalues of .     has at most distinct eigenvalues.          Let be any matrix representation of . We know from that the eigenvalues of are precisely the eigenvalues of . Furthermore, by , the eigenvalues of are precisely the roots of lying in the base field . Elementary polynomial properties imply that a scalar is a root of if and only if we can factor as , where the quotient  is a polynomial of degree . Continuing this factoring out of roots process until the quotient polynomial has no roots in , we see that we can factor as in . From that factorization, we see that are the distinct roots of , and hence the distinct eigenvalues of .    As we have mentioned before, a polynomial in of degree can have at most distinct roots in . Thus the characteristic polynomial of can have at most distinct roots in , from which it follows that can have at most distinct eigenvalues.      "
},
{
  "id": "eg_eigenvalues_reflection",
  "level": "2",
  "url": "s_char_poly.html#eg_eigenvalues_reflection",
  "type": "Example",
  "number": "1.16.9",
  "title": "Reflection, again.",
  "body": " Reflection, again   Let be a nonzero element of , let , and let be reflection through . We saw in that , where .   Compute the characteristic polynomial of .    Find all eigenvalues of .          Instead of computing directly, we make use of statement (2) of : . In computing above, we make use of the fact that for an matrix as follows: .    Since factors as , we see that the only eigenvalues of are and .      "
},
{
  "id": "eg_eigenvalues_rotation",
  "level": "2",
  "url": "s_char_poly.html#eg_eigenvalues_rotation",
  "type": "Example",
  "number": "1.16.10",
  "title": "Rotation (again).",
  "body": " Rotation (again)   Fix an angle , and let . As mentioned earlier, the linear operator is rotation about the origin by the angle .   Compute the characteristic polynomial of .    Find all eigenvalues of . Consider the cases , , and separately.       The characteristic polynomial of is . We can use the quadratic formula to find the real roots of : . When , this reduces to ; similarly, when , this reduces to . This confirms our our conclusion in that when the only eigenvalue of is ; and that when , the only eigenvalue of is .  When , and we see that has no real roots. This confirms our conclusion in that such rotations have no eigenvalues.   "
},
{
  "id": "eg_complex_matrix_transformation",
  "level": "2",
  "url": "s_char_poly.html#eg_complex_matrix_transformation",
  "type": "Example",
  "number": "1.16.11",
  "title": "Complex matrix transformation.",
  "body": " Complex matrix transformation   Let , let , and let be the corresponding matrix transformation.   Compute the characteristic polynomial of .    Determine the eigenvalue of .          We compute the characteristic polynomial , exactly as in .    Using the complex version of the quadratic formula, we can factor over as , where . Note that since we have , from whence it follows that the two complex square-roots of are and . Using the Euler formula , we can further express these eigenvalues as . Finally, observe that in contrast to the linear operator , which has no eigenvalues ( ), the linear operator has two distinct (non-real) eigenvalues.      "
},
{
  "id": "ss_char_poly-18",
  "level": "2",
  "url": "s_char_poly.html#ss_char_poly-18",
  "type": "Example",
  "number": "1.16.12",
  "title": "Compute eigenspaces.",
  "body": " Compute eigenspaces   Let be the matrix transformation , where . The characteristic polynomial of is is .   Find all eigenvalues of .    For each eigenvalue compute a basis for the eigenspace .          To find the eigenvalues of we must factor the polynomial . We first look for integer roots that divide the constant term . We see that , and thus that is a factor of . Using polynomial long division, we see that . Continuing this process with the cubic polynomial, we factor . Since is irreducible over , we can factor no further. The factorization , tells us that the eigenvalues of are and .     Basis of  We have . We conclude that is a basis of .    Basis of  We have . We conclude that is a basis of .       "
},
{
  "id": "proc_eigenspaces_transformation",
  "level": "2",
  "url": "s_char_poly.html#proc_eigenspaces_transformation",
  "type": "Procedure",
  "number": "1.16.13",
  "title": "Computing eigenspaces of operators.",
  "body": " Computing eigenspaces of operators   Let , where . To compute the eigenvalues and eigenspaces of , proceed as follows.   Pick any basis of and compute .    Compute , the characteristic polynomial of and factor as in to find the distinct eigenvalues of .    For each compute a basis of using the null space algorithm for matrices.    For each , lift the basis of to a basis of using the inverse coordinate map .      "
},
{
  "id": "eg_eigenvector_systematic_transposition",
  "level": "2",
  "url": "s_char_poly.html#eg_eigenvector_systematic_transposition",
  "type": "Example",
  "number": "1.16.14",
  "title": "Transposition (again).",
  "body": " Transposition (again)   Let be defined as .   Find all eigenvalues of .    For each eigenvalue of compute a basis for .       Let , the standard basis of . We let , where . Now compute the the eigenvalues and eigenspaces of . We leave it to you to verify that . We conclude that and are the only eigenvalues of (and hence also ). Bases for the corresponding eigenspaces of are readily computed (using the null space algorithm for matrices) as . Now lift these up to bases of the eigenspaces and of : . It is easy to see that and are the subspaces of symmetric and skew-symmetric matrices, respectively. This is consistent with our analysis in .   "
},
{
  "id": "s_diagable",
  "level": "1",
  "url": "s_diagable.html",
  "type": "Section",
  "number": "1.17",
  "title": "Diagonalizable operators",
  "body": " Diagonalizable operators  Our treatment of eigenvectors in was motivated in part by the objective of finding particularly simple matrix representations of a linear transformation . The simplest situation we could hope for is that there is a choice of basis for which is diagonal. We say that the basis  diagonalizes the transformation in this case, and that is diagonalizable . In this section we develop theoretical and computational tools for determining whether a linear transformation is diagonalizable, and for finding a diagonalizing basis when is in fact diagonalizable.   Diagonalizable   Let be a finite-dimensional vector space. A linear operator is diagonalizable if there exists a basis of such that is a diagonal matrix. In this case, we say that the basis  diagonalizes  .     Diagonalizable matrix  We will say a matrix is diagonalizable if its corresponding matrix transformation is diagonalizable.  Let's examine what this means in terms of matrix arithmetic. Let be the standard basis of , and recall that : , the standard matrix of is the matrix representation of with respect to the standard basis. The matrix is diagonalizable if and only if there is a basis of such that is a diagonal matrix. Using , this in turn is equivalent to there being an invertible matrix such that . Thus, we conclude that is diagonalizable if and only if it is similar to a diagonal matrix. We say that the invertible matrix in  diagonalizes the matrix .   Given a basis of and linear operator , looking at the recipe for the matrix representation , we see that we have for some diagonal matrix if and only if , if and only if for all , if and only if for all . Since vectors of a basis are necessarily nonzero, we conclude that diagonalizes if and only if it consists of eigenvectors of . We call such a basis an eigenbasis .   Eigenbasis   Let . A basis of is an eigenbasis of if is an eigenvector of for all .    Our discussion above constitutes a proof of the first two statements in .   Diagonalizable operators   Let be a linear operator on the finite-dimensional vector space , and let be the distinct eigenvalues of . The following statements are equivalent.    is diagonalizable.     has an eigenbasis .     .     .       We defer a full proof of for the time being, opting instead to illustrate with some examples how we can decide whether a linear transformation is diagonalizable. The last statement of will serve as the foundation for our computational technique for answering such questions, as we make official in the following procedure.   Diagonalizable operator   Let be a linear operator of the finite-dimensional vector space . To determine whether is diagonalizable and\/or find an eigenbasis of , proceed as follows.   Determine the distinct eigenvalues of .    For each , compute a basis for .     is diagonalizable if and only if .    If is diagonalizable, then the tuple obtained by concatenating the bases is an eigenbasis of .        Transposition   Let be defined as . Decide whether is diagonalizable; if it is, find an eigenbasis of and compute .    We have already done most of the work of for this linear operator in . There we saw that and are the only eigenvalues of , and the the bases of and are , respectively. It follows that . Since we have , we conclude that is diagonalizable, and furthermore that is an eigenbasis of .     Matrix transformation   Let be the matrix transformation , where . Decide whether is diagonalizable; if it is, find an invertible matrix that diagonalizes and compute .    We compute the characteristic polynomial as . (Note how easy was to compute, thanks to being upper triangular.) The distinct eigenvalues of are thus and . We compute . Since , we conclude that is not diagaonalizable.     Matrix transformation   Let be the matrix transformation , where . Decide whether is diagonalizable; if it is, find an invertible matrix that diagonalizes and compute .    We compute the characteristic polynomial as . The distinct eigenvalues of are thus and . We compute . Since , we conclude that is diagaonalizable. Furthermore we obtain an eigenbasis by concantenating the bases for our two eigenspaces. Let be the standard basis of . By the change of basis formula, we have . Since is an eigenbasis, we easily compute . Thus we have .    The next example is a first glimpse at the algebraic usefulness of diagonalizability. If is diagonalizable, we have and hence for any positive integer . This gives us a convenient means of computing powers of diagonalizable matrices.   Matrix power   Let . Compute     The characteristic polynomial of is . The usual computation shows that , and thus that we have , where . From the discussion above, we conclude that .     Independence of eigenvectors   Let be a linear operator on the vector space (not necessarily finite dimensional). If is a tuple of eigenvectors of satisfying for all and for all ( , the eigenvalues are distinct), then is linearly independent.    We prove the result by contradiction. If is linearly depenendent, then we can find a linearly dependent finite subtuple of minimal length . Since each is an eigenvector of , we have for all ; since the eigenvalues are assumed to be distinct, we have for .  Note first that we must have : since eigenvectors are nonzero by definition, no subtuple of of length 1 is linearly dependent. Since is linearly dependent we have , where for some . After reordering, we may assume without loss of generality that . Next we apply to both sides of : . From equation and the equation in we have , and hence . Since and , we have . Thus equation implies that the tuple is a linearly dependent subtuple of of length , contradicting the minimality of . Since we have reached a contradiction, we conclude that must be linearly independent.     Exponential functions as eigenvectors   Let be an interval of containing more than one element. For all , define as . Prove that is an uncountably infinite linear independent tuple in .    We saw in that the functions are all eigenvectors of the differential operator , . Since for all , we see that the functions all have distinct eigenvalues. We conclude from that is a linearly independent tuple. Since this tuple is indexed by itself, we see that it is an uncountably infinite linear independent tuple.     Independence of eigenvectors   Let be a linear operator on the vector space (not necessarily finite dimensional). If are distinct eigenvalues of , then .    Suppose we have a decomposition of $\\boldzero$ of the form . Let $J=\\{j\\in \\{1,2,\\dots, r\\}\\colon v_j\\ne \\boldzero\\}$. If $J$ is nonempty, then $v_j$ is a $\\lambda_j$-eigenvector, and we have , a nontrivial linear combination of the tuple . This is a contradiction, as this tuple of eigenvectors (with distinct eigenvalues) is linearly independent by . Thus is empty, and we see that the decomposition must be the trivial one. We conclude from that subspace sum is direct: , that , as desired.     and give us the necessary theoretical tools to complete the proof of .   Proof of  Recall that we have already provided an argument proving that statements (1) and (2) of are equivalent. We will prove the cycle of implications (2) (3) (4) (2)   Implication: (2) (3)  Assume has an eigenbasis . Since the elements of are eigenvectors, after a re-ordering of , we can assume is of the form , where for all and , is an eigenvector of with eigenvalue . (Note that we do not assume that here, but it follows from the rest of our argument that that this must be the case.) Since is a basis, given any , we have , where for all . This proves . By , we conclude that . Lastly, since clearly , we have , as desired.    Implication: (3) (4)  This is a direct consequence of .    Implication: (4) (2)  Assume . For each , let be a basis of . Since , we see that . Consider the concatentation of the bases : , . Since each is the basis of , and since by , it follows that is linearly independent. (This is left as an exercise.) Since , it follows from that is a basis of . Since each element of is an eigenvector of , we conclude that is an eigenbasis of .     Distinct eigenvalues   Let , where . If has distinct eigenvalues, then is diagonalizable.    Let be the distict eigenvalues of , and let be a tuple of eigenvectors satisfying for all . By , is linearly independent. Since , it follows that is an eigenbasis of . From , we conclude that is diagonalizable.     Distinct eigenvalues  Mark well that the implication in is not an if and only if! Consider the identity transformation on a nonzero finite-dimensional vector space . Given any basis of , we have . Thus is diagonalizable. And yet, has only one eigenvalue, namely .    Complex linear operator   Assume is a linear operator of the 3-dimensional -vector space and that the characteristic polynomial of is . Decide whether is diagonalizable.    Over the characteristic polynomial factors as , where . Thus has three distinct eigenvalues . Since , it follows from that is diagonalizable.     Real linear operator   Assume is a linear operator of the 3-dimensional -vector space , that the characteristic polynomial of is , and that . Decide whether is diagonalizable.    Over the characteristic polynomial factors as . Thus is the only eigenvalue of . If were diagonalizable, we would have . But then for all , in which case for all : , we would have in this case. We conclude that is not diagonalizable.    "
},
{
  "id": "d_diagonalizable",
  "level": "2",
  "url": "s_diagable.html#d_diagonalizable",
  "type": "Definition",
  "number": "1.17.1",
  "title": "Diagonalizable.",
  "body": " Diagonalizable   Let be a finite-dimensional vector space. A linear operator is diagonalizable if there exists a basis of such that is a diagonal matrix. In this case, we say that the basis  diagonalizes  .   "
},
{
  "id": "s_diagable-4",
  "level": "2",
  "url": "s_diagable.html#s_diagable-4",
  "type": "Convention",
  "number": "1.17.2",
  "title": "Diagonalizable matrix.",
  "body": " Diagonalizable matrix  We will say a matrix is diagonalizable if its corresponding matrix transformation is diagonalizable.  Let's examine what this means in terms of matrix arithmetic. Let be the standard basis of , and recall that : , the standard matrix of is the matrix representation of with respect to the standard basis. The matrix is diagonalizable if and only if there is a basis of such that is a diagonal matrix. Using , this in turn is equivalent to there being an invertible matrix such that . Thus, we conclude that is diagonalizable if and only if it is similar to a diagonal matrix. We say that the invertible matrix in  diagonalizes the matrix .  "
},
{
  "id": "d_eigenbasis",
  "level": "2",
  "url": "s_diagable.html#d_eigenbasis",
  "type": "Definition",
  "number": "1.17.3",
  "title": "Eigenbasis.",
  "body": " Eigenbasis   Let . A basis of is an eigenbasis of if is an eigenvector of for all .   "
},
{
  "id": "th_diagable",
  "level": "2",
  "url": "s_diagable.html#th_diagable",
  "type": "Theorem",
  "number": "1.17.4",
  "title": "Diagonalizable operators.",
  "body": " Diagonalizable operators   Let be a linear operator on the finite-dimensional vector space , and let be the distinct eigenvalues of . The following statements are equivalent.    is diagonalizable.     has an eigenbasis .     .     .      "
},
{
  "id": "proc_diagable",
  "level": "2",
  "url": "s_diagable.html#proc_diagable",
  "type": "Procedure",
  "number": "1.17.5",
  "title": "Diagonalizable operator.",
  "body": " Diagonalizable operator   Let be a linear operator of the finite-dimensional vector space . To determine whether is diagonalizable and\/or find an eigenbasis of , proceed as follows.   Determine the distinct eigenvalues of .    For each , compute a basis for .     is diagonalizable if and only if .    If is diagonalizable, then the tuple obtained by concatenating the bases is an eigenbasis of .      "
},
{
  "id": "eg_diagable_transposition",
  "level": "2",
  "url": "s_diagable.html#eg_diagable_transposition",
  "type": "Example",
  "number": "1.17.6",
  "title": "Transposition.",
  "body": " Transposition   Let be defined as . Decide whether is diagonalizable; if it is, find an eigenbasis of and compute .    We have already done most of the work of for this linear operator in . There we saw that and are the only eigenvalues of , and the the bases of and are , respectively. It follows that . Since we have , we conclude that is diagonalizable, and furthermore that is an eigenbasis of .   "
},
{
  "id": "eg_nondiagable_matrix_transform",
  "level": "2",
  "url": "s_diagable.html#eg_nondiagable_matrix_transform",
  "type": "Example",
  "number": "1.17.7",
  "title": "Matrix transformation.",
  "body": " Matrix transformation   Let be the matrix transformation , where . Decide whether is diagonalizable; if it is, find an invertible matrix that diagonalizes and compute .    We compute the characteristic polynomial as . (Note how easy was to compute, thanks to being upper triangular.) The distinct eigenvalues of are thus and . We compute . Since , we conclude that is not diagaonalizable.   "
},
{
  "id": "eg_diagable_matrix_transform",
  "level": "2",
  "url": "s_diagable.html#eg_diagable_matrix_transform",
  "type": "Example",
  "number": "1.17.8",
  "title": "Matrix transformation.",
  "body": " Matrix transformation   Let be the matrix transformation , where . Decide whether is diagonalizable; if it is, find an invertible matrix that diagonalizes and compute .    We compute the characteristic polynomial as . The distinct eigenvalues of are thus and . We compute . Since , we conclude that is diagaonalizable. Furthermore we obtain an eigenbasis by concantenating the bases for our two eigenspaces. Let be the standard basis of . By the change of basis formula, we have . Since is an eigenbasis, we easily compute . Thus we have .   "
},
{
  "id": "eg_matrix_power",
  "level": "2",
  "url": "s_diagable.html#eg_matrix_power",
  "type": "Example",
  "number": "1.17.9",
  "title": "Matrix power.",
  "body": " Matrix power   Let . Compute     The characteristic polynomial of is . The usual computation shows that , and thus that we have , where . From the discussion above, we conclude that .   "
},
{
  "id": "th_eigenvectors_ind",
  "level": "2",
  "url": "s_diagable.html#th_eigenvectors_ind",
  "type": "Theorem",
  "number": "1.17.10",
  "title": "Independence of eigenvectors.",
  "body": " Independence of eigenvectors   Let be a linear operator on the vector space (not necessarily finite dimensional). If is a tuple of eigenvectors of satisfying for all and for all ( , the eigenvalues are distinct), then is linearly independent.    We prove the result by contradiction. If is linearly depenendent, then we can find a linearly dependent finite subtuple of minimal length . Since each is an eigenvector of , we have for all ; since the eigenvalues are assumed to be distinct, we have for .  Note first that we must have : since eigenvectors are nonzero by definition, no subtuple of of length 1 is linearly dependent. Since is linearly dependent we have , where for some . After reordering, we may assume without loss of generality that . Next we apply to both sides of : . From equation and the equation in we have , and hence . Since and , we have . Thus equation implies that the tuple is a linearly dependent subtuple of of length , contradicting the minimality of . Since we have reached a contradiction, we conclude that must be linearly independent.   "
},
{
  "id": "eg_exponential_eigenvectors",
  "level": "2",
  "url": "s_diagable.html#eg_exponential_eigenvectors",
  "type": "Example",
  "number": "1.17.11",
  "title": "Exponential functions as eigenvectors.",
  "body": " Exponential functions as eigenvectors   Let be an interval of containing more than one element. For all , define as . Prove that is an uncountably infinite linear independent tuple in .    We saw in that the functions are all eigenvectors of the differential operator , . Since for all , we see that the functions all have distinct eigenvalues. We conclude from that is a linearly independent tuple. Since this tuple is indexed by itself, we see that it is an uncountably infinite linear independent tuple.   "
},
{
  "id": "cor_eigenvectors_ind",
  "level": "2",
  "url": "s_diagable.html#cor_eigenvectors_ind",
  "type": "Corollary",
  "number": "1.17.12",
  "title": "Independence of eigenvectors.",
  "body": " Independence of eigenvectors   Let be a linear operator on the vector space (not necessarily finite dimensional). If are distinct eigenvalues of , then .    Suppose we have a decomposition of $\\boldzero$ of the form . Let $J=\\{j\\in \\{1,2,\\dots, r\\}\\colon v_j\\ne \\boldzero\\}$. If $J$ is nonempty, then $v_j$ is a $\\lambda_j$-eigenvector, and we have , a nontrivial linear combination of the tuple . This is a contradiction, as this tuple of eigenvectors (with distinct eigenvalues) is linearly independent by . Thus is empty, and we see that the decomposition must be the trivial one. We conclude from that subspace sum is direct: , that , as desired.   "
},
{
  "id": "s_diagable-20",
  "level": "2",
  "url": "s_diagable.html#s_diagable-20",
  "type": "Proof",
  "number": "1.17.1",
  "title": "Proof of Theorem 1.17.4.",
  "body": " Proof of  Recall that we have already provided an argument proving that statements (1) and (2) of are equivalent. We will prove the cycle of implications (2) (3) (4) (2)   Implication: (2) (3)  Assume has an eigenbasis . Since the elements of are eigenvectors, after a re-ordering of , we can assume is of the form , where for all and , is an eigenvector of with eigenvalue . (Note that we do not assume that here, but it follows from the rest of our argument that that this must be the case.) Since is a basis, given any , we have , where for all . This proves . By , we conclude that . Lastly, since clearly , we have , as desired.    Implication: (3) (4)  This is a direct consequence of .    Implication: (4) (2)  Assume . For each , let be a basis of . Since , we see that . Consider the concatentation of the bases : , . Since each is the basis of , and since by , it follows that is linearly independent. (This is left as an exercise.) Since , it follows from that is a basis of . Since each element of is an eigenvector of , we conclude that is an eigenbasis of .   "
},
{
  "id": "cor_distinct_eigenvalues",
  "level": "2",
  "url": "s_diagable.html#cor_distinct_eigenvalues",
  "type": "Corollary",
  "number": "1.17.13",
  "title": "Distinct eigenvalues.",
  "body": " Distinct eigenvalues   Let , where . If has distinct eigenvalues, then is diagonalizable.    Let be the distict eigenvalues of , and let be a tuple of eigenvectors satisfying for all . By , is linearly independent. Since , it follows that is an eigenbasis of . From , we conclude that is diagonalizable.   "
},
{
  "id": "s_diagable-22",
  "level": "2",
  "url": "s_diagable.html#s_diagable-22",
  "type": "Remark",
  "number": "1.17.14",
  "title": "Distinct eigenvalues.",
  "body": " Distinct eigenvalues  Mark well that the implication in is not an if and only if! Consider the identity transformation on a nonzero finite-dimensional vector space . Given any basis of , we have . Thus is diagonalizable. And yet, has only one eigenvalue, namely .  "
},
{
  "id": "eg_distinct_eigenvalues_complex",
  "level": "2",
  "url": "s_diagable.html#eg_distinct_eigenvalues_complex",
  "type": "Example",
  "number": "1.17.15",
  "title": "Complex linear operator.",
  "body": " Complex linear operator   Assume is a linear operator of the 3-dimensional -vector space and that the characteristic polynomial of is . Decide whether is diagonalizable.    Over the characteristic polynomial factors as , where . Thus has three distinct eigenvalues . Since , it follows from that is diagonalizable.   "
},
{
  "id": "eg_distinct_eigenvalues_real",
  "level": "2",
  "url": "s_diagable.html#eg_distinct_eigenvalues_real",
  "type": "Example",
  "number": "1.17.16",
  "title": "Real linear operator.",
  "body": " Real linear operator   Assume is a linear operator of the 3-dimensional -vector space , that the characteristic polynomial of is , and that . Decide whether is diagonalizable.    Over the characteristic polynomial factors as . Thus is the only eigenvalue of . If were diagonalizable, we would have . But then for all , in which case for all : , we would have in this case. We conclude that is not diagonalizable.   "
},
{
  "id": "s_inner_prod",
  "level": "1",
  "url": "s_inner_prod.html",
  "type": "Section",
  "number": "1.18",
  "title": "Inner product spaces",
  "body": " Inner product spaces   An inner product is an additional layer of structure we can define on an - or -vector space that generalizes the dot product operation on , familiar to students of multivariable calculus at least in the or cases. As with the definition of vector spaces, proceeds axiomatically. Think of those axioms as a list of important properties, all enjoyed by the familiar dot product operation, that we want our generalized version of the dot product to satisfy.  The addition of an inner product enriches the structure of a vector space considerably, and gives rise to a number of additional useful analytic tools. We highlight a few below.   Distance and angle  A notion of distance and angle between two vectors can be defined relative to a given inner product. These provide a numeric measurement of how close (distance) or closely oriented (angle) two vectors in our space are.    Orthogonality  Two vectors are orthogonal , relative to a given inner product, if . Orthogonality leads further to a general notion of orthogonal projection onto a subspace .    Orthogonal bases  An orthogonal basis of a vector space , relative to a given inner product, is one whose elements are pairwise orthogonal. As we will see there are many computational advantages of working with an orthogonal basis.       Inner product  Technically, we will deal with two distinct notions of inner product in this course: one for -vector spaces, and one for -spaces. It turns out, however, that the notion of a complex inner product is an extension of sorts of the real inner product. As such, the definition below rolls both concepts up into one formulation. In order to cover the more general complex inner product, it makes use of the complex conjugation and complex modulus operations . It is useful to recall how these operations behave with respect to real numbers, thinking as always of as a subset of : namely, given , we have , and the complex modulus of is equal to the real absolute value of , since .   Inner product   Let . An inner product on an -vector space is a function that satisfies the following properties.   Conjugate symmetry   for all .    Additivity   for all .    (Conjugate) homogeneity   for all and .    Positivity   for all .   An inner product space is a pair , where is an -vector space ( ) and is an inner product on .     Inner product  The conjugate symmetry property implies that the property follows from , and that the property follows from . As such, we have indulged in some redundancy in .    Inner product: real case  Note that when , reduces to , since implies . Similarly, the homogeneity properties reduce to , since implies .   We give a short list of some common inner product spaces, starting from the most familiar, and moving to the more exotic. We state each example as a definition, but of course in each instance it must be proved that the given vector space and operation satisfies the inner product axioms. We will leave that verification to the reader for the most part, restricting our comments in each case only to the positivity axiom.   Dot product   Let . The function defined as is an inner product. When this is called the dot product ; when this is called the complex dot product or standard Hermitian inner product .     Weighted dot product   Let . Given positive real numbers , the function defined as is an inner product on called the weighted dot product with weights .     Polynomial evaluation   Let , and let be a positive integer. Given any distinct scalars , the function is an inner product on . We call a polynomial evaluation inner product .     Integral inner product   Let be a closed interval in . The function is an inner product on . We call an integral inner product .     Inner product  Since the definition of inner product assumes that the base field is either or , henceforth anytime the inner product is in play for an -vector space , it should be assumed that .    Inner product properties   Let be an inner product space.   Given , the function defined as is a linear transformation.     for all .    Let . The following statements are equivalent.    .     for all .     .       Let . The following statements are equivalent.    .     for all .     for all .             We use the 1-step technique. Given any and , we have .    We have . Subtracting from both sides, we conclude that . It follows from conjugate symmetry that .    We prove the cycle of implications (a) (b) (c) (a). The implication (a) (b) was shown above. Furthermore, (c) follows trivially from (a) by taking . Lastly, the implication (c) (a) follows directly from the positivity axiom (Axiom (iv)) of the inner product definition.    This follows in a relatively straightforward manner from (3) starting with the observation that if and only if .         Norm   Norm   Let be an inner product space. The function defined as is called the norm associated to .    Observe that the norm function defined above is dependent on the inner product. That is, each choice of inner product for a vector space gives rise to its own norm function. We illustrate this with the inner products introduced above.   Norm      Weighted dot product  Consider the weighted dot product on with weights . Given , we have .    Polynomial evaluation  Consider a polynomial evaluation inner product on with distinct inputs . Given , we have     Integral inner product  Consider the integral inner product on , where is a closed interval in . Given , we have .        Cauchy-Schwarz inequality   Let be an inner product space. We have for all . Furthermore, the inequality is an equality if and only if one of or is a scalar multiple of the other.    First observe that inequality clearly holds if , since in this case we have .  We now show holds when . For any scalar , we have . Let's unpack this inequality using additional properties of the inner product: . Assume . Since the last inequality is true for any scalar , it is true for the particular choice choice . (Note that is well defined since , and hence .) We now substitute this expression in for and do some further simplification: . Taking square-roots of both sides (and using the fact that for all nonnegative real numbers ), we conclude that , as desired.  Having proved that holds for all , we now show that we have equality if and only one of the vectors is a scalar multiple of the other. The reverse implication is easy to see: if , for example, then we have , showing that equality holds in . The argument in the case is very similar. (We cheated somewhat above, using property (2) of . However, the proof of that property does not use Cauchy-Schwarz, so we are not indulging in circularity here.)  It remains only to show the forward implication. Assume ; we will show that one of the vectors is a scalar multiple of the other. If , then the claim follows trivially, since . If , then working our way backward through the various simplifications starting with , we see that , where the last line follows from (3) of . Thus, one of the vectors (namely, ) is scalar multiple of the others in this case, as desired.     Norm properties   Let be an inner product space.    if and only if for all .     for all and .    Triangle inequality   for all . Moreover, the inequality is an equality of and only if one of the vectors is a nonnegative scalar multiple of the other.    Parallelogram law             We have .    We have .    We have . Take the square-root of both sides, we conclude that . Working our way back through the chain of equalities above, we see that equality holds if and only if and . The first equality holds if and only if one of the vectors is a scalar multiple of the other (by Cauchy-Schwarz); we leave it to the reader to show that both equalities hold if and only if one of the vectors is a scalar multiple of the other, and that scalar is a nonnegative real number.    Proof left as an exercise.        Norm functions  You can use the first three statements of to axiomatize the properties of a norm. That is given a -vector space (with ), a norm on is a function satisfying the following axioms.    for all , and moreover, if and only if .     for all and .     for all .   In this sense, the norm we have defined is just one special case of a norm function: one arising from a given inner product. It is not the case that all norms arise in this manner: for example, you can show that the taxicab distance on defined as is a norm, but does not arise from an inner product. In fact, you can show that a norm (in the axiomatic sense) arises from an inner product if and only it satisfies the parallelogram law.    Distance function  Let be an inner product space. The norm function, which we understand as a measure of size or length of vectors, gives rise in turn to a distance function  that can be thought of as measure of the distance between vectors. From it follows easily that the function satisfies the following properties.    for all , and moreover, we have if and only if .     for all .   This distance function provides yet another layer of structure to an inner product space, making it what is known as a metric space . Metric spaces come equipped with their own rich theory that includes useful and familiar concepts from calculus (and analysis) like limits, continuity, closed and open sets. connected and compact sets, .    "
},
{
  "id": "d_inner_prod",
  "level": "2",
  "url": "s_inner_prod.html#d_inner_prod",
  "type": "Definition",
  "number": "1.18.1",
  "title": "Inner product.",
  "body": " Inner product   Let . An inner product on an -vector space is a function that satisfies the following properties.   Conjugate symmetry   for all .    Additivity   for all .    (Conjugate) homogeneity   for all and .    Positivity   for all .   An inner product space is a pair , where is an -vector space ( ) and is an inner product on .   "
},
{
  "id": "ss_inner_product-4",
  "level": "2",
  "url": "s_inner_prod.html#ss_inner_product-4",
  "type": "Remark",
  "number": "1.18.2",
  "title": "Inner product.",
  "body": " Inner product  The conjugate symmetry property implies that the property follows from , and that the property follows from . As such, we have indulged in some redundancy in .  "
},
{
  "id": "ss_inner_product-5",
  "level": "2",
  "url": "s_inner_prod.html#ss_inner_product-5",
  "type": "Remark",
  "number": "1.18.3",
  "title": "Inner product: real case.",
  "body": " Inner product: real case  Note that when , reduces to , since implies . Similarly, the homogeneity properties reduce to , since implies .  "
},
{
  "id": "d_dot",
  "level": "2",
  "url": "s_inner_prod.html#d_dot",
  "type": "Definition",
  "number": "1.18.4",
  "title": "Dot product.",
  "body": " Dot product   Let . The function defined as is an inner product. When this is called the dot product ; when this is called the complex dot product or standard Hermitian inner product .   "
},
{
  "id": "d_weighted_dot",
  "level": "2",
  "url": "s_inner_prod.html#d_weighted_dot",
  "type": "Definition",
  "number": "1.18.5",
  "title": "Weighted dot product.",
  "body": " Weighted dot product   Let . Given positive real numbers , the function defined as is an inner product on called the weighted dot product with weights .   "
},
{
  "id": "d_poly_eval",
  "level": "2",
  "url": "s_inner_prod.html#d_poly_eval",
  "type": "Definition",
  "number": "1.18.6",
  "title": "Polynomial evaluation.",
  "body": " Polynomial evaluation   Let , and let be a positive integer. Given any distinct scalars , the function is an inner product on . We call a polynomial evaluation inner product .   "
},
{
  "id": "d_integral_inner",
  "level": "2",
  "url": "s_inner_prod.html#d_integral_inner",
  "type": "Definition",
  "number": "1.18.7",
  "title": "Integral inner product.",
  "body": " Integral inner product   Let be a closed interval in . The function is an inner product on . We call an integral inner product .   "
},
{
  "id": "ss_inner_product-11",
  "level": "2",
  "url": "s_inner_prod.html#ss_inner_product-11",
  "type": "Convention",
  "number": "1.18.8",
  "title": "Inner product.",
  "body": " Inner product  Since the definition of inner product assumes that the base field is either or , henceforth anytime the inner product is in play for an -vector space , it should be assumed that .  "
},
{
  "id": "th_inner_prod",
  "level": "2",
  "url": "s_inner_prod.html#th_inner_prod",
  "type": "Theorem",
  "number": "1.18.9",
  "title": "Inner product properties.",
  "body": " Inner product properties   Let be an inner product space.   Given , the function defined as is a linear transformation.     for all .    Let . The following statements are equivalent.    .     for all .     .       Let . The following statements are equivalent.    .     for all .     for all .             We use the 1-step technique. Given any and , we have .    We have . Subtracting from both sides, we conclude that . It follows from conjugate symmetry that .    We prove the cycle of implications (a) (b) (c) (a). The implication (a) (b) was shown above. Furthermore, (c) follows trivially from (a) by taking . Lastly, the implication (c) (a) follows directly from the positivity axiom (Axiom (iv)) of the inner product definition.    This follows in a relatively straightforward manner from (3) starting with the observation that if and only if .      "
},
{
  "id": "d_norm",
  "level": "2",
  "url": "s_inner_prod.html#d_norm",
  "type": "Definition",
  "number": "1.18.10",
  "title": "Norm.",
  "body": " Norm   Let be an inner product space. The function defined as is called the norm associated to .   "
},
{
  "id": "eg_norms",
  "level": "2",
  "url": "s_inner_prod.html#eg_norms",
  "type": "Example",
  "number": "1.18.11",
  "title": "Norm.",
  "body": " Norm      Weighted dot product  Consider the weighted dot product on with weights . Given , we have .    Polynomial evaluation  Consider a polynomial evaluation inner product on with distinct inputs . Given , we have     Integral inner product  Consider the integral inner product on , where is a closed interval in . Given , we have .      "
},
{
  "id": "th_cauchy-schwarz",
  "level": "2",
  "url": "s_inner_prod.html#th_cauchy-schwarz",
  "type": "Theorem",
  "number": "1.18.12",
  "title": "Cauchy-Schwarz inequality.",
  "body": " Cauchy-Schwarz inequality   Let be an inner product space. We have for all . Furthermore, the inequality is an equality if and only if one of or is a scalar multiple of the other.    First observe that inequality clearly holds if , since in this case we have .  We now show holds when . For any scalar , we have . Let's unpack this inequality using additional properties of the inner product: . Assume . Since the last inequality is true for any scalar , it is true for the particular choice choice . (Note that is well defined since , and hence .) We now substitute this expression in for and do some further simplification: . Taking square-roots of both sides (and using the fact that for all nonnegative real numbers ), we conclude that , as desired.  Having proved that holds for all , we now show that we have equality if and only one of the vectors is a scalar multiple of the other. The reverse implication is easy to see: if , for example, then we have , showing that equality holds in . The argument in the case is very similar. (We cheated somewhat above, using property (2) of . However, the proof of that property does not use Cauchy-Schwarz, so we are not indulging in circularity here.)  It remains only to show the forward implication. Assume ; we will show that one of the vectors is a scalar multiple of the other. If , then the claim follows trivially, since . If , then working our way backward through the various simplifications starting with , we see that , where the last line follows from (3) of . Thus, one of the vectors (namely, ) is scalar multiple of the others in this case, as desired.   "
},
{
  "id": "th_norm",
  "level": "2",
  "url": "s_inner_prod.html#th_norm",
  "type": "Theorem",
  "number": "1.18.13",
  "title": "Norm properties.",
  "body": " Norm properties   Let be an inner product space.    if and only if for all .     for all and .    Triangle inequality   for all . Moreover, the inequality is an equality of and only if one of the vectors is a nonnegative scalar multiple of the other.    Parallelogram law             We have .    We have .    We have . Take the square-root of both sides, we conclude that . Working our way back through the chain of equalities above, we see that equality holds if and only if and . The first equality holds if and only if one of the vectors is a scalar multiple of the other (by Cauchy-Schwarz); we leave it to the reader to show that both equalities hold if and only if one of the vectors is a scalar multiple of the other, and that scalar is a nonnegative real number.    Proof left as an exercise.      "
},
{
  "id": "ss_norm-7",
  "level": "2",
  "url": "s_inner_prod.html#ss_norm-7",
  "type": "Remark",
  "number": "1.18.14",
  "title": "Norm functions.",
  "body": " Norm functions  You can use the first three statements of to axiomatize the properties of a norm. That is given a -vector space (with ), a norm on is a function satisfying the following axioms.    for all , and moreover, if and only if .     for all and .     for all .   In this sense, the norm we have defined is just one special case of a norm function: one arising from a given inner product. It is not the case that all norms arise in this manner: for example, you can show that the taxicab distance on defined as is a norm, but does not arise from an inner product. In fact, you can show that a norm (in the axiomatic sense) arises from an inner product if and only it satisfies the parallelogram law.  "
},
{
  "id": "ss_norm-8",
  "level": "2",
  "url": "s_inner_prod.html#ss_norm-8",
  "type": "Remark",
  "number": "1.18.15",
  "title": "Distance function.",
  "body": " Distance function  Let be an inner product space. The norm function, which we understand as a measure of size or length of vectors, gives rise in turn to a distance function  that can be thought of as measure of the distance between vectors. From it follows easily that the function satisfies the following properties.    for all , and moreover, we have if and only if .     for all .   This distance function provides yet another layer of structure to an inner product space, making it what is known as a metric space . Metric spaces come equipped with their own rich theory that includes useful and familiar concepts from calculus (and analysis) like limits, continuity, closed and open sets. connected and compact sets, .  "
},
{
  "id": "s_adhoc",
  "level": "1",
  "url": "s_adhoc.html",
  "type": "Section",
  "number": "1.19",
  "title": "Orthogonality",
  "body": " Orthogonality   Orthogonality   Orthogonality   Let be an inner product space.   Orthogonal vectors  Vectors are orthogonal if .    Orthogonal tuple  Let be a tuple of nonzero vectors of . We say is orthogonal if for all with : , the vectors of are pairwise orthogonal. We say is orthonormal if it is orthogonal and for all .        Orthogonal implies independent   Let be a tuple in the inner product space . If is orthogonal, then is linearly independent. Using logical shorthand: .          Show that the tuple is orthogonal with respect to the dot product and hence linearly independent by .    A simple computation shows for all , showing that is orthogonal. implies is linearly independent. Since , it follows from that is a basis.      Let with integral inner product , and let , where as always, the element is understood as the constant function . Show that is orthogonal and hence linearly independent.    First observe that for all . (Note: since , the set is not orthonormal. ) Next, using the trigonometric identities it follows that .      Orthogonal bases  Given an inner product space we will see that working with orthogonal sets of vectors is extremely convenient computationally speaking. In particular, when picking basis of , we will look for one consisting of orthogonal vectors. Not surprisingly, this is called an orthogonal basis .  We will see in precisely why working with orthogonal or orthonormal bases is so convenient. Before we do so, however, we would like some guarantee that we can actually find an orthogonal basis. The Gram-Schmidt procedure comes to our rescue in this regard, at least in the finite-dimensional case, as it provides a method of converting an arbitrary basis into an orthogonal one.   Gram-Schmidt procedure  Gram-Schmidt procedure   Let be an inner product space of dimension , and let be a basis for . To produce an orthogonal basis (or orthonormal basis ) from , follow the steps below.   Set .    Orthogonalize  Proceeding in succession for each , replace with the vector defined as . The resulting tuple is an orthogonal basis of .    Normalize  For each let . The tuple is an orthonormal basis of .        Existence of orthonormal bases   Let be an inner product space of dimension .   There is an orthonormal basis for . In fact, any basis of can be converted to an orthonormal basis using the Gram-Schmidt procedure .    Any orthogonal (resp. orthonormal) tuple in can be extended to an orthogonal (resp. orthonormal) basis .          See and its proof.    The orthogonal set is linearly independent by . Let be the distinct elements of . (We must have since is linearly independent.) By we can extend to a basis . It is easy to see that when we apply the Gram-Schmidt procedure to , the first vectors are left unchanged, as they are already pairwise orthogonal. Thus Gram-Schmidt returns an orthogonal basis of the form , as desired.       Now let's see the computational virtue of working with orthogonal bases.   Calculating with orthogonal bases   Let be an inner product space of dimension .   Let be an orthogonal basis of . For any we have , where for all .  If is orthonormal , so that for all , then the inner product formula reduces to the simpler .    Parseval's identity  Let be an orthonormal basis of . Given any , we have .         Consider the inner product space with the dot product.   Verify that is an orthonormal basis of .    Let . Find the scalars such that .    Verify that .          Easily verified.    Using we compute .    Computing directly yields . Using the generalized Pythagorean theorem we have , as desired.       As the previous example and begin to make clear, orthogonal bases, and especially orthonormal bases make our life easier computationally speaking. This observation is worthy of a mantra.   Orthogonal basis mantra   Working with an orthogonal basis is very nice; working with an orthonormal basis is even nicer.     "
},
{
  "id": "d_ortho",
  "level": "2",
  "url": "s_adhoc.html#d_ortho",
  "type": "Definition",
  "number": "1.19.1",
  "title": "Orthogonality.",
  "body": " Orthogonality   Let be an inner product space.   Orthogonal vectors  Vectors are orthogonal if .    Orthogonal tuple  Let be a tuple of nonzero vectors of . We say is orthogonal if for all with : , the vectors of are pairwise orthogonal. We say is orthonormal if it is orthogonal and for all .      "
},
{
  "id": "th_ortho_ind",
  "level": "2",
  "url": "s_adhoc.html#th_ortho_ind",
  "type": "Theorem",
  "number": "1.19.2",
  "title": "Orthogonal implies independent.",
  "body": " Orthogonal implies independent   Let be a tuple in the inner product space . If is orthogonal, then is linearly independent. Using logical shorthand: .       "
},
{
  "id": "ss_ortho-4",
  "level": "2",
  "url": "s_adhoc.html#ss_ortho-4",
  "type": "Example",
  "number": "1.19.3",
  "title": "",
  "body": "  Show that the tuple is orthogonal with respect to the dot product and hence linearly independent by .    A simple computation shows for all , showing that is orthogonal. implies is linearly independent. Since , it follows from that is a basis.   "
},
{
  "id": "eg_orthogonal_functions",
  "level": "2",
  "url": "s_adhoc.html#eg_orthogonal_functions",
  "type": "Example",
  "number": "1.19.4",
  "title": "",
  "body": "  Let with integral inner product , and let , where as always, the element is understood as the constant function . Show that is orthogonal and hence linearly independent.    First observe that for all . (Note: since , the set is not orthonormal. ) Next, using the trigonometric identities it follows that .   "
},
{
  "id": "proc_gram-schmidt",
  "level": "2",
  "url": "s_adhoc.html#proc_gram-schmidt",
  "type": "Procedure",
  "number": "1.19.5",
  "title": "Gram-Schmidt procedure.",
  "body": " Gram-Schmidt procedure  Gram-Schmidt procedure   Let be an inner product space of dimension , and let be a basis for . To produce an orthogonal basis (or orthonormal basis ) from , follow the steps below.   Set .    Orthogonalize  Proceeding in succession for each , replace with the vector defined as . The resulting tuple is an orthogonal basis of .    Normalize  For each let . The tuple is an orthonormal basis of .      "
},
{
  "id": "cor_orthonormal_existence",
  "level": "2",
  "url": "s_adhoc.html#cor_orthonormal_existence",
  "type": "Corollary",
  "number": "1.19.6",
  "title": "Existence of orthonormal bases.",
  "body": " Existence of orthonormal bases   Let be an inner product space of dimension .   There is an orthonormal basis for . In fact, any basis of can be converted to an orthonormal basis using the Gram-Schmidt procedure .    Any orthogonal (resp. orthonormal) tuple in can be extended to an orthogonal (resp. orthonormal) basis .          See and its proof.    The orthogonal set is linearly independent by . Let be the distinct elements of . (We must have since is linearly independent.) By we can extend to a basis . It is easy to see that when we apply the Gram-Schmidt procedure to , the first vectors are left unchanged, as they are already pairwise orthogonal. Thus Gram-Schmidt returns an orthogonal basis of the form , as desired.      "
},
{
  "id": "th_orthogonal_basis_formula",
  "level": "2",
  "url": "s_adhoc.html#th_orthogonal_basis_formula",
  "type": "Theorem",
  "number": "1.19.7",
  "title": "Calculating with orthogonal bases.",
  "body": " Calculating with orthogonal bases   Let be an inner product space of dimension .   Let be an orthogonal basis of . For any we have , where for all .  If is orthonormal , so that for all , then the inner product formula reduces to the simpler .    Parseval's identity  Let be an orthonormal basis of . Given any , we have .      "
},
{
  "id": "s_adhoc-3-8",
  "level": "2",
  "url": "s_adhoc.html#s_adhoc-3-8",
  "type": "Example",
  "number": "1.19.8",
  "title": "",
  "body": "  Consider the inner product space with the dot product.   Verify that is an orthonormal basis of .    Let . Find the scalars such that .    Verify that .          Easily verified.    Using we compute .    Computing directly yields . Using the generalized Pythagorean theorem we have , as desired.      "
},
{
  "id": "mantra_orthogonal_bases",
  "level": "2",
  "url": "s_adhoc.html#mantra_orthogonal_bases",
  "type": "Mantra",
  "number": "1.19.9",
  "title": "Orthogonal basis mantra.",
  "body": " Orthogonal basis mantra   Working with an orthogonal basis is very nice; working with an orthonormal basis is even nicer.   "
},
{
  "id": "s_ortho_proj",
  "level": "1",
  "url": "s_ortho_proj.html",
  "type": "Section",
  "number": "1.20",
  "title": "Orthogonal projection",
  "body": " Orthogonal projection   A trick we learn early on in physics-- specifically, in dynamics problems in -- is to pick a convenient axis and then decompose any relevant vectors (force, acceleration, velocity, position, ) into a sum of two components: one that points along the chosen axis, and one that points perpendicularly to it. As we will see in this section, this technique can be vastly generalized. Namely, instead of we can take any inner product space ; and instead of a chosen axis in , we can choose any finite-dimensional subspace ; then any can be decomposed in the form where and is a vector orthogonal to , in a sense we will make precise below. Just as in our toy physics example, this manner of decomposing vectors helps simplify computations in problems where the subspace chosen is of central importance.    Orthogonal complement   Orthogonal complement   Let be an inner product space. Given a subspace , its orthogonal complement  is the set of all vectors of that are orthogonal to every vector in : , .    The next theorem tells us that to check , it suffices to check that is orthogonal to the elements of a spanning set of .   Orthogonality and spanning sets   Let be an inner product space, and let . We have if and only if for all : , .    The forward implication follows purely from logic. Conversely, assume that for all . Given , we can write for some finite subset , in which case . Thus .     is especially useful for computing when admits a finite basis or spanning set.    Consider the inner product space together with the dot product. Let : the line with equation . Compute and identify it as a familiar geometric object in .    According to , since , we have . Letting , we see that if and only if , if and only if . Thus is the line with equation . Observe that the lines and are indeed perpendicular to one another. (Graph them!)      Consider the inner product space together with the dot product. Let be the plane with equation . Compute and identify this as a familiar geometric object in .    First, solving for , we see that . Next, according to we have . It follows that is the set of vectors satisfying the linear system Solving this system using Gaussian elimination we conclude that , which we recognize as the line passing through the origin with direction vector . This is none other than the normal line to the plane passing through the origin.     Orthogonal complement   Let be a subspace of the inner product space .    is a subspace of .     .     .    finite dimensional  If is finite dimensional, then . Furthermore, we have in this setting.          We use the 2-step technique.  Since for all , it is certainly true that for all . Thus .    Assume . By definition this means for all . It follows that for any , and for all we have , and thus that .    Assume . Since and , we must have . The positivity axiom for inner products then implies that . Thus .    Let . Given any , we have . Thus for all , showing that . This proves .    Assume is finite dimensional. By definition this means has a finite basis. The Gram-Schmidt procedure then guarantees that we can produce an orthogonal basis of . Furthermore, the proof of the validity of the Gram-Schmidt procedure shows that for any the vector is orthogonal to for all . Since , we conclude from that . Noting that , we see that for all we can write , where and . This proves that . Since by (2), we conclude that .  Lastly, we show in this case that . Using (3) above, it suffices to show . Take , and write , where and . Since , we have . Since , we conclude that , and hence that , as desired.         Orthogonal projection   Orthogonal projection   Let be an inner product space, and let be a finite-dimensional subspace of . Since , given any there is a unique choice of and satisfying The vectors and are the orthogonal projections of onto and , respectively, and are denoted and . In this manner the direct sum decomposition gives rise to functions called orthogonal projection onto and , respectively.    From the proof of we extract the following procedure for computing for a finite-dimensional subspace of an inner product space.   Orthogonal projection   Let be a finite-dimensional subspace of the inner product space . To compute and , proceed as follows.   Compute an orthogonal basis of using the Gram-Schmidt procedure.    Given , we have .        Orthogonal projection onto plane   Consider the inner product space with the dot product. Let be the plane with equation . Compute for each below.                     According to our first step is to produce an orthogonal basis of . We do so by inspection. Since , we simply need to find two solutions to that are orthogonal to one another: , and . Thus we choose as our orthogonal basis, and our computations become a matter of applying , which in this case becomes . Now compute: . The last two computations might give you pause. Why do we have and ? The answer is that is already an element of , so it stands to reason that its projection is itself; and is already orthogonal to (it is a scalar multiple of ), so it stands to reason that its projection is equal to .     Orthogonal projection   Let be an inner product space, and let be a finite-dimensional subspace of .   Orthogonal projection is linear   .    Orthogonal projection as closest element   is the unique element satisfying the following property: . In other words, is the unique element in that minimizes the distance to : , it is the unique element of closest to .  Similarly, is the unique element in that minimizes the distance to .    We have for all : , .          Both and are specific examples of the more general projection onto a direct summand operator. We saw in the such operators are linear.    Given , write with and . By definition this means . Given any we have . This proves for all : , is an element of that minimizes the distance to . It remains to show that is the unique element of satisfying this property. To this end, if is another element of that minimizes the distance to , then in particular we have . Since we also have , we conclude that . Looking at the chain of inequalities above, this would imply that . The latter is true if and only if , if and only if , as desired.  Note that the proof above only used the fact that is a direct sum decomposition into two orthogonal spaces. As such, essentially the same argument can be used to show that is the unique element of minimizing the distance to .    This is essentially by definition of and . Any vector can be written as , where and . By definition we have and , whence .        Distance to subspace   Let be a subspace of the inner product space . Given a vector , its distance to , denoted , is defined as .     Distance to   Let be a finite-dimensional subspace of the inner product space . For all , we have .     Projection onto a line   Any line in passing through the origin can be described as , for some . The tuple is trivially an orthogonal basis of . Using , we have . It follows that , where .     Projection onto specific line   Consider the line .   Find the matrix such that .    Use your matrix formula from (a) to compute , , and .    Compute and .          Using the general formula described in , we have .    Now compute . The last two computations, and , should come as no surprise, since and .    We have . Again, the second computation should come as no surprise. Since is itself an element of , it stands to reason that its distance to is equal to zero.        Projection onto planes in   Any plane passing through the origin can be described as . Equivalently, is the set of all satisfying : , , where .  Let and be the standard matrices for and , respectively. Since ( ), it follows that , or equivalently . Making use of our standard matrix computation for in , we now compute .      Consider the plane .   Find the matrix such that .    Use your matrix formula from (a) to compute and .    Compute and .          Using the general formula described in , we have .    Now compute .    We have .         Trigonometric polynomial approximation  Consider the inner product space consisting of along with the integral inner product . In we saw that is orthogonal with respect to this inner product. Thus is an orthogonal basis of . We call the space of trigonometric polynomials of degree at most .  Since is an orthogonal basis of , given an arbitrary function , its orthogonal projection is given by , where . Here we are using , as well as the inner product formulas and from .  What is the relationship between and ? tells us that is the best trigonometric polynomial approximation of of degree at most in the following sense: given any any other trigonometric polynomial , we have . Unpacking the definition of norm in this inner product space, we conclude that for all .  Thus, given a continuous function on , linear algebra shows us how to find its best trigonometric polynomial approximation of the form . However, linear algebra does not tell us just how good this approximation is. This question, among others, is tackled by another mathematical theory: Fourier analysis . There we learn that the trigonometric polynomial approximations get arbitrarily close to as we let increase. More precisely, letting be the orthogonal projection of onto the space of trigonometric polynomials of degree at most , we have .    Least-squares solution to linear systems  In statistics we often wish to approximate a scatter plot of points , , with a line that best fits the data. Finding this line amounts to finding the appropriate slope and -intercept : , in this setup, the points are given, and and are the unknowns we wish to find. For the line to perfectly fit the data, we would want . In other words would be a solution to the matrix equation , where . Of course in most situations the provided points do not lie on a line, and thus there is no solution to the given matrix equation . When this is the case we can use the theory of orthogonal projection to find what is called a least-squares solution, which we now describe in detail.  The least-squares method applies to any matrix equation , where and are given, and is treated as an unknown vector. Recall that . When , and hence does not have a solution, the least-squares method proceeds by replacing with the element of closest to it: that is, with its orthogonal projection onto . Let , where orthogonal projection is taken with respect to the dot product on , and consider the adjusted matrix equation . By definition of , we have , and thus there is a solution to . We call a least-squares solution to . Observe that does not necessarily satisfy ; rather, it satisfies . What makes this a least-squares solution is that is the element of closest to . With respect to the dot product, this means that a least-squares solution minimizes the quantity , among all .   Best fitting line   Suppose we wish to find a line that best fits (in the least-square sense) the following data points: . Following the discussion above, we seek a solution to the matrix equation , where . Using Gaussian elimination, we see easily that this equation has no solution: equivalently, . Accordingly, we compute and find a solution to . Conveniently, the set is already an orthogonal basis of , allowing us to use : . Lastly, solving yields , and we conclude the line is the one that best fits the data in the least-squares sense.     Visualizing least-squares   helps us give a graphical interpretation of how the line best approximates the points .   Least-squares visualization  Least-squares visualization    Let be the given -values of the points, and let be the orthogonal projection of onto . In the graph the values denote the vertical difference between the data points, and our fitting line. The projection makes the error as small as possible. This means if I draw any other line and compute the corresponding differences at the -values -3, 1 and 2, then    To compute a least-squares solution to we must first compute the orthogonal projection of onto ; and this in turn requires first producing an orthogonal basis of , which may require using the Gram-Schmidt procedure. The following result bypasses these potentially onerous steps by characterizing a least-squares solution to as a solution to the matrix equation .   Least-squares matrix formula   Given an matrix and column vector , a vector is a least-squares solution to if and only if . In other words, we can find a least-squares solution by solving the matrix equation directly.    Let , and let . The key observation is that a vector satisfies if and only if is an orthogonal decomposition of with respect to ; and this is true if and only if . Thus we have .      Consider again the matrix equation from . According to the least-squares solution can be found by solving the equation for . We compute and solve just as before.     "
},
{
  "id": "d_ortho_comp",
  "level": "2",
  "url": "s_ortho_proj.html#d_ortho_comp",
  "type": "Definition",
  "number": "1.20.1",
  "title": "Orthogonal complement.",
  "body": " Orthogonal complement   Let be an inner product space. Given a subspace , its orthogonal complement  is the set of all vectors of that are orthogonal to every vector in : , .   "
},
{
  "id": "th_ortho_comp_span",
  "level": "2",
  "url": "s_ortho_proj.html#th_ortho_comp_span",
  "type": "Theorem",
  "number": "1.20.2",
  "title": "Orthogonality and spanning sets.",
  "body": " Orthogonality and spanning sets   Let be an inner product space, and let . We have if and only if for all : , .    The forward implication follows purely from logic. Conversely, assume that for all . Given , we can write for some finite subset , in which case . Thus .   "
},
{
  "id": "eg_ortho_comp_line",
  "level": "2",
  "url": "s_ortho_proj.html#eg_ortho_comp_line",
  "type": "Example",
  "number": "1.20.3",
  "title": "",
  "body": "  Consider the inner product space together with the dot product. Let : the line with equation . Compute and identify it as a familiar geometric object in .    According to , since , we have . Letting , we see that if and only if , if and only if . Thus is the line with equation . Observe that the lines and are indeed perpendicular to one another. (Graph them!)   "
},
{
  "id": "eg_ortho_comp_plane",
  "level": "2",
  "url": "s_ortho_proj.html#eg_ortho_comp_plane",
  "type": "Example",
  "number": "1.20.4",
  "title": "",
  "body": "  Consider the inner product space together with the dot product. Let be the plane with equation . Compute and identify this as a familiar geometric object in .    First, solving for , we see that . Next, according to we have . It follows that is the set of vectors satisfying the linear system Solving this system using Gaussian elimination we conclude that , which we recognize as the line passing through the origin with direction vector . This is none other than the normal line to the plane passing through the origin.   "
},
{
  "id": "th_ortho_comp",
  "level": "2",
  "url": "s_ortho_proj.html#th_ortho_comp",
  "type": "Theorem",
  "number": "1.20.5",
  "title": "Orthogonal complement.",
  "body": " Orthogonal complement   Let be a subspace of the inner product space .    is a subspace of .     .     .    finite dimensional  If is finite dimensional, then . Furthermore, we have in this setting.          We use the 2-step technique.  Since for all , it is certainly true that for all . Thus .    Assume . By definition this means for all . It follows that for any , and for all we have , and thus that .    Assume . Since and , we must have . The positivity axiom for inner products then implies that . Thus .    Let . Given any , we have . Thus for all , showing that . This proves .    Assume is finite dimensional. By definition this means has a finite basis. The Gram-Schmidt procedure then guarantees that we can produce an orthogonal basis of . Furthermore, the proof of the validity of the Gram-Schmidt procedure shows that for any the vector is orthogonal to for all . Since , we conclude from that . Noting that , we see that for all we can write , where and . This proves that . Since by (2), we conclude that .  Lastly, we show in this case that . Using (3) above, it suffices to show . Take , and write , where and . Since , we have . Since , we conclude that , and hence that , as desired.      "
},
{
  "id": "d_ortho_proj",
  "level": "2",
  "url": "s_ortho_proj.html#d_ortho_proj",
  "type": "Definition",
  "number": "1.20.6",
  "title": "Orthogonal projection.",
  "body": " Orthogonal projection   Let be an inner product space, and let be a finite-dimensional subspace of . Since , given any there is a unique choice of and satisfying The vectors and are the orthogonal projections of onto and , respectively, and are denoted and . In this manner the direct sum decomposition gives rise to functions called orthogonal projection onto and , respectively.   "
},
{
  "id": "proc_ortho_proj",
  "level": "2",
  "url": "s_ortho_proj.html#proc_ortho_proj",
  "type": "Procedure",
  "number": "1.20.7",
  "title": "Orthogonal projection.",
  "body": " Orthogonal projection   Let be a finite-dimensional subspace of the inner product space . To compute and , proceed as follows.   Compute an orthogonal basis of using the Gram-Schmidt procedure.    Given , we have .      "
},
{
  "id": "ss_ortho_proj-5",
  "level": "2",
  "url": "s_ortho_proj.html#ss_ortho_proj-5",
  "type": "Example",
  "number": "1.20.8",
  "title": "Orthogonal projection onto plane.",
  "body": " Orthogonal projection onto plane   Consider the inner product space with the dot product. Let be the plane with equation . Compute for each below.                     According to our first step is to produce an orthogonal basis of . We do so by inspection. Since , we simply need to find two solutions to that are orthogonal to one another: , and . Thus we choose as our orthogonal basis, and our computations become a matter of applying , which in this case becomes . Now compute: . The last two computations might give you pause. Why do we have and ? The answer is that is already an element of , so it stands to reason that its projection is itself; and is already orthogonal to (it is a scalar multiple of ), so it stands to reason that its projection is equal to .   "
},
{
  "id": "th_ortho_proj",
  "level": "2",
  "url": "s_ortho_proj.html#th_ortho_proj",
  "type": "Theorem",
  "number": "1.20.9",
  "title": "Orthogonal projection.",
  "body": " Orthogonal projection   Let be an inner product space, and let be a finite-dimensional subspace of .   Orthogonal projection is linear   .    Orthogonal projection as closest element   is the unique element satisfying the following property: . In other words, is the unique element in that minimizes the distance to : , it is the unique element of closest to .  Similarly, is the unique element in that minimizes the distance to .    We have for all : , .          Both and are specific examples of the more general projection onto a direct summand operator. We saw in the such operators are linear.    Given , write with and . By definition this means . Given any we have . This proves for all : , is an element of that minimizes the distance to . It remains to show that is the unique element of satisfying this property. To this end, if is another element of that minimizes the distance to , then in particular we have . Since we also have , we conclude that . Looking at the chain of inequalities above, this would imply that . The latter is true if and only if , if and only if , as desired.  Note that the proof above only used the fact that is a direct sum decomposition into two orthogonal spaces. As such, essentially the same argument can be used to show that is the unique element of minimizing the distance to .    This is essentially by definition of and . Any vector can be written as , where and . By definition we have and , whence .      "
},
{
  "id": "d_distance_subspace",
  "level": "2",
  "url": "s_ortho_proj.html#d_distance_subspace",
  "type": "Definition",
  "number": "1.20.10",
  "title": "Distance to subspace.",
  "body": " Distance to subspace   Let be a subspace of the inner product space . Given a vector , its distance to , denoted , is defined as .   "
},
{
  "id": "cor_ortho_proj",
  "level": "2",
  "url": "s_ortho_proj.html#cor_ortho_proj",
  "type": "Corollary",
  "number": "1.20.11",
  "title": "Distance to <span class=\"process-math\">\\(W\\)<\/span>.",
  "body": " Distance to   Let be a finite-dimensional subspace of the inner product space . For all , we have .   "
},
{
  "id": "eg_projection_line",
  "level": "2",
  "url": "s_ortho_proj.html#eg_projection_line",
  "type": "Example",
  "number": "1.20.12",
  "title": "Projection onto a line.",
  "body": " Projection onto a line   Any line in passing through the origin can be described as , for some . The tuple is trivially an orthogonal basis of . Using , we have . It follows that , where .   "
},
{
  "id": "ss_ortho_proj-10",
  "level": "2",
  "url": "s_ortho_proj.html#ss_ortho_proj-10",
  "type": "Example",
  "number": "1.20.13",
  "title": "Projection onto specific line.",
  "body": " Projection onto specific line   Consider the line .   Find the matrix such that .    Use your matrix formula from (a) to compute , , and .    Compute and .          Using the general formula described in , we have .    Now compute . The last two computations, and , should come as no surprise, since and .    We have . Again, the second computation should come as no surprise. Since is itself an element of , it stands to reason that its distance to is equal to zero.      "
},
{
  "id": "eg_projection_plane",
  "level": "2",
  "url": "s_ortho_proj.html#eg_projection_plane",
  "type": "Example",
  "number": "1.20.14",
  "title": "Projection onto planes in <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": " Projection onto planes in   Any plane passing through the origin can be described as . Equivalently, is the set of all satisfying : , , where .  Let and be the standard matrices for and , respectively. Since ( ), it follows that , or equivalently . Making use of our standard matrix computation for in , we now compute .   "
},
{
  "id": "ss_ortho_proj-12",
  "level": "2",
  "url": "s_ortho_proj.html#ss_ortho_proj-12",
  "type": "Example",
  "number": "1.20.15",
  "title": "",
  "body": "  Consider the plane .   Find the matrix such that .    Use your matrix formula from (a) to compute and .    Compute and .          Using the general formula described in , we have .    Now compute .    We have .      "
},
{
  "id": "s_ortho_proj-5-2",
  "level": "2",
  "url": "s_ortho_proj.html#s_ortho_proj-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometric polynomials of degree at most "
},
{
  "id": "s_ortho_proj-6-3",
  "level": "2",
  "url": "s_ortho_proj.html#s_ortho_proj-6-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least-squares "
},
{
  "id": "eg_least-squares",
  "level": "2",
  "url": "s_ortho_proj.html#eg_least-squares",
  "type": "Example",
  "number": "1.20.16",
  "title": "Best fitting line.",
  "body": " Best fitting line   Suppose we wish to find a line that best fits (in the least-square sense) the following data points: . Following the discussion above, we seek a solution to the matrix equation , where . Using Gaussian elimination, we see easily that this equation has no solution: equivalently, . Accordingly, we compute and find a solution to . Conveniently, the set is already an orthogonal basis of , allowing us to use : . Lastly, solving yields , and we conclude the line is the one that best fits the data in the least-squares sense.   "
},
{
  "id": "rm_least-squares",
  "level": "2",
  "url": "s_ortho_proj.html#rm_least-squares",
  "type": "Remark",
  "number": "1.20.17",
  "title": "Visualizing least-squares.",
  "body": " Visualizing least-squares   helps us give a graphical interpretation of how the line best approximates the points .   Least-squares visualization  Least-squares visualization    Let be the given -values of the points, and let be the orthogonal projection of onto . In the graph the values denote the vertical difference between the data points, and our fitting line. The projection makes the error as small as possible. This means if I draw any other line and compute the corresponding differences at the -values -3, 1 and 2, then   "
},
{
  "id": "th_leastsquares",
  "level": "2",
  "url": "s_ortho_proj.html#th_leastsquares",
  "type": "Theorem",
  "number": "1.20.19",
  "title": "Least-squares matrix formula.",
  "body": " Least-squares matrix formula   Given an matrix and column vector , a vector is a least-squares solution to if and only if . In other words, we can find a least-squares solution by solving the matrix equation directly.    Let , and let . The key observation is that a vector satisfies if and only if is an orthogonal decomposition of with respect to ; and this is true if and only if . Thus we have .   "
},
{
  "id": "s_ortho_proj-6-8",
  "level": "2",
  "url": "s_ortho_proj.html#s_ortho_proj-6-8",
  "type": "Example",
  "number": "1.20.20",
  "title": "",
  "body": "  Consider again the matrix equation from . According to the least-squares solution can be found by solving the equation for . We compute and solve just as before.   "
},
{
  "id": "s_adjoint",
  "level": "1",
  "url": "s_adjoint.html",
  "type": "Section",
  "number": "1.21",
  "title": "Adjoints",
  "body": " Adjoints   Adjoints   Adjoint of transformation   Let and be inner product spaces. Given , we call a function an adjoint of if it satisfies for all and . Furthermore, we call each of the equivalent properties the adjoint property .     Adjoint properties  To see that properties are equivalent, note that .    Adjoints  As is evident in the statement of , discussion of adjoint transformations generally involves two different inner product spaces with two different inner products. Although we will be careful to use subscript notation in statements of definitions or theory, henceforth we will drop the subscripts on and when constructing proofs or computing examples. The reader can easily determine which inner product is meant by determining which space ( or ) the input vectors are elements of.   As shown in in , is guaranteed to exist if . However, it is not true in general that every linear transformation of inner product spaces has an adjoint.   Nonexistence of an adjoint   Consider the vector space together with the integral inner product . The linear operator defined as does not have an adjoint.    This is left as a homework exercise. It is worth noting that if we restrict to certain -invariant subspaces of , the resulting linear transformation does indeed have an adjoint. For example, we may take the space of polynomial functions , or the trigonometric polynomial space .     Adjoint properties   Let , , and be inner product spaces, Let , and let .   There is at most one adjoint of : , if there exists a function satisfying the adjoint property, then it is unique.    An adjoint of is linear: , if exists, then     If and exist, then so does for any scalars . Moreover, in this case, we have .    If exists, then so does . Moreover, in this case we have .    If and exist, then so does . Moreover, in this case we have .    Given a scalar , let be the dilation map defined as . We have . As a consequence, since , we have .          Suppose and are adjoint functions of : , and both satisfy . It follows that for all and , we have . Since for all , it follows from that for all , and hence that , as desired.    Assume an adjoint exists. We use the 1-step technique to show is linear. Given any and , we will show that by proving that for all , using . To this end, we have for all . Thus , as desired.    This is left as an exercise.    Assume and exists. By uniqueness of adjoints, it suffices to show that satisfies the adjoint property. We have for all and . Since this property uniquely defines the adjoint , we conclude that .    Assume exists. From (2) we know that is linear. That is its adjoint follows now from the equivalence of the two properties : , we can think of the first as saying that is an adjoint of , and the second as saying that is an adjoint of .    This is left as an exercise.       Before getting to our existence result, we consider a few examples where we can determine an adjoint map explicitly. For our first example of computing an adjoint, we consider a linear transformation . Recall that for a unique matrix . By , there is an adjoint transformation . What is the matrix such that ? This is answered in , which makes use of the following definition.   Conjugate and adjoint of a matrix   Let , and let .  The conjugate of , denoted is the matrix defined as . The adjoint of , denoted , is the matrix defined as .     Adjoint matrix  Thanks to the definition , many elementary properties of the adjoint operation follow from related properties enjoyed by the transpose operator, with complex conjugation intervening to spice things up. We leave it to the reader to prove that the following properties for matrices (of appropriate size) and scalars : .    Standard inner product   Let , and let be the standard inner product on as defined in . For all , we have .    Let and . Treating and as column vectors ( ), we have .    The next result tells us that adjoints of matrix transformations exist, and that in fact the adjoint of is the matrix transformation .   Adjoint of a matrix transformation   Assume , and let . For all and , we have , where and denote the standard inner products on and , respectively.  As a consequence, given a matrix transformation , we have , where the adjoint is taken with respect to the standard inner products on and .    Equation follows directly from equations , as these are precisely the adjoint properties for the matrix transformation . We prove (which is equivalent to ): .     Adjoint of real matrix transformation  As usual, observe that if complex conjugation operation can be disregarded. Let's give a quick summary of what the previous definitions and theorems boil down to in this setting.   Given , we have .    Given , we have .    Given , we have .       Matrix representation of adjoint   Let be an inner product space of finite dimension , and let be an orthonormal basis of . Given and adjoint , we have . More generally, given , we have .    It suffices to show the equivalence . The key ingredients to the proof are summarized as follows:   Since is an orthormal basis, we have , where the inner products on the right is the standard one on .    Matrices satisfy for all and if and only if . This follows from and uniqueness of the adjoint (if it exists).   We now prove the equivalence: .     Matrix representation of adjoint  It is absolutely essential that the basis in in is orthonormal. As an example of what can go wrong when this condition is dropped, consider , where . According to , we have , where the adjoint is taken with respect to the standard inner product on . Of course, if we pick to be the standard basis of , which is orthonormal with respect to this inner product, we have , and we see that , as predicted by . Now consider the non-orthonormal basis . We readily compute , and observe that in this case.    Matrix representation of adjoint  Not surprisingly, a more general version of holds for linear operators between two different finite-dimensional inner product spaces. However, in that setting we need to choose two bases and , and consider the matrix represetations and , resulting in some thorny notation. . I thought the generalized result was not interesting enough to justify this notational.  It is also worth noting that the equivalence in implies the existence of adjoints in the setting it specified. However, guarantees the existence of adjoints in a much more general setting.   We now consider some more exotic\/abstract examples.   Adjoint of inclusion map   Let be a finite-dimensional subspace of the inner product space , and let be the inclusion map. Given an explicit description of the adjoint map .    Since is finite dimensional, we have , and can define the orthogonal projection map . We claim that , and prove our claim by showing that for all and . Given any , we write , where by definition and . It follows that for any , we have , as desired.     Derivative operator   Let be the set of functions of period 1. The operation defines an inner product on . It is easy to show that if , then : , the derivative of a period-1 function is a period-1 function. Thus we can define a linear transformation . Show that .    Observe that , by definition. We must show that satisfies the adjoint property with respect to . Given any , we have .     Integral transformation   Let be a closed interval in . Let , be a continuous function. Given any , you can show that the integral function is continuous on and that the resulting map is a linear transformation. Show, using Fubini's theorem for double integrals, that the adjoint of is the function .    This is left as an exercise.      Existence of adjoints   Linear functional   Let be a vector space. A linear functional on is a linear transformation from to . The vector space of all linear functionals on is called the dual space of , and is denoted .     Riesz representation   Let be an inner product space.   For all , the function defined as is a linear functional.    The function , where is injective and satisfies . In other words, is conjugate linear .    Assume . In this case the map above is bijective. In particular, given a linear functional , there is a unique vector such that : , such that for all .          This was already proved in . The current statement is just a slight reformulation of this fact, using the language of linear functionals.    We use the 1-step technique. Given any and , the function satisfies for all . Thus : , .  We now show is injective. Given , we have . Thus is injective.    Let . Since , by we have . Since is conjugate linear, and not linear, we cannot invoke directly to conclude that it is surjective. However, the same result does in fact apply to conjugate linear maps for the following two reasons (left to the reader to prove):   the image of a conjugate linear map is a subspace of the codomain (just as with linear maps);    the image of a linearly independent tuple under an injective conjugate linear map is a linearly independent tuple.   Let be a basis of . From the two points above, we see that is a subspace of containing the linearly independent tuple . It follows that , and thus that , as desired.  Alternatively, we can give a more constructive proof of the surjectivity of as follows:   pick an orthonormal basis of ;    given , let for all ;    let ;    for all , we have ;    since and agree on the basis , we have .           Adjoint of a transformation   Let and be inner product spaces, and assume is finite dimensional. Every linear transformation has a unique adjoint .    First we prove the existence of by defining it explicitly via a somewhat involved recipe. Given any , the function is easily seen to be a linear functional on : , . By there is a unique vector satisfying for all . We define .  Having defined as a function,, we now show that it satisfies equation ; equation then follows immediately from the conjugate symmetry property. Given any , we have , as desired.  The uniqueness and linearity of follow from .     Null space and image of adjoint   Let and be inner product spaces. Assume has adjoint .    We have .     We have . If we assume further that , then .       Assume exists. We first prove that . We have . Thus .  To prove that , we use the fact that and apply the result above to compute . Thus . Since is finite dimensional, we have , and thus , as desired.     "
},
{
  "id": "d_adjoint",
  "level": "2",
  "url": "s_adjoint.html#d_adjoint",
  "type": "Definition",
  "number": "1.21.1",
  "title": "Adjoint of transformation.",
  "body": " Adjoint of transformation   Let and be inner product spaces. Given , we call a function an adjoint of if it satisfies for all and . Furthermore, we call each of the equivalent properties the adjoint property .   "
},
{
  "id": "ss_adjoints-3",
  "level": "2",
  "url": "s_adjoint.html#ss_adjoints-3",
  "type": "Remark",
  "number": "1.21.2",
  "title": "Adjoint properties.",
  "body": " Adjoint properties  To see that properties are equivalent, note that .  "
},
{
  "id": "ss_adjoints-4",
  "level": "2",
  "url": "s_adjoint.html#ss_adjoints-4",
  "type": "Convention",
  "number": "1.21.3",
  "title": "Adjoints.",
  "body": " Adjoints  As is evident in the statement of , discussion of adjoint transformations generally involves two different inner product spaces with two different inner products. Although we will be careful to use subscript notation in statements of definitions or theory, henceforth we will drop the subscripts on and when constructing proofs or computing examples. The reader can easily determine which inner product is meant by determining which space ( or ) the input vectors are elements of.  "
},
{
  "id": "eg_no_adjoint",
  "level": "2",
  "url": "s_adjoint.html#eg_no_adjoint",
  "type": "Example",
  "number": "1.21.4",
  "title": "Nonexistence of an adjoint.",
  "body": " Nonexistence of an adjoint   Consider the vector space together with the integral inner product . The linear operator defined as does not have an adjoint.    This is left as a homework exercise. It is worth noting that if we restrict to certain -invariant subspaces of , the resulting linear transformation does indeed have an adjoint. For example, we may take the space of polynomial functions , or the trigonometric polynomial space .   "
},
{
  "id": "th_adjoint_props",
  "level": "2",
  "url": "s_adjoint.html#th_adjoint_props",
  "type": "Theorem",
  "number": "1.21.5",
  "title": "Adjoint properties.",
  "body": " Adjoint properties   Let , , and be inner product spaces, Let , and let .   There is at most one adjoint of : , if there exists a function satisfying the adjoint property, then it is unique.    An adjoint of is linear: , if exists, then     If and exist, then so does for any scalars . Moreover, in this case, we have .    If exists, then so does . Moreover, in this case we have .    If and exist, then so does . Moreover, in this case we have .    Given a scalar , let be the dilation map defined as . We have . As a consequence, since , we have .          Suppose and are adjoint functions of : , and both satisfy . It follows that for all and , we have . Since for all , it follows from that for all , and hence that , as desired.    Assume an adjoint exists. We use the 1-step technique to show is linear. Given any and , we will show that by proving that for all , using . To this end, we have for all . Thus , as desired.    This is left as an exercise.    Assume and exists. By uniqueness of adjoints, it suffices to show that satisfies the adjoint property. We have for all and . Since this property uniquely defines the adjoint , we conclude that .    Assume exists. From (2) we know that is linear. That is its adjoint follows now from the equivalence of the two properties : , we can think of the first as saying that is an adjoint of , and the second as saying that is an adjoint of .    This is left as an exercise.      "
},
{
  "id": "d_adjoint_matrix",
  "level": "2",
  "url": "s_adjoint.html#d_adjoint_matrix",
  "type": "Definition",
  "number": "1.21.6",
  "title": "Conjugate and adjoint of a matrix.",
  "body": " Conjugate and adjoint of a matrix   Let , and let .  The conjugate of , denoted is the matrix defined as . The adjoint of , denoted , is the matrix defined as .   "
},
{
  "id": "ss_adjoints-10",
  "level": "2",
  "url": "s_adjoint.html#ss_adjoints-10",
  "type": "Remark",
  "number": "1.21.7",
  "title": "Adjoint matrix.",
  "body": " Adjoint matrix  Thanks to the definition , many elementary properties of the adjoint operation follow from related properties enjoyed by the transpose operator, with complex conjugation intervening to spice things up. We leave it to the reader to prove that the following properties for matrices (of appropriate size) and scalars : .  "
},
{
  "id": "th_adjoint_inner",
  "level": "2",
  "url": "s_adjoint.html#th_adjoint_inner",
  "type": "Theorem",
  "number": "1.21.8",
  "title": "Standard inner product.",
  "body": " Standard inner product   Let , and let be the standard inner product on as defined in . For all , we have .    Let and . Treating and as column vectors ( ), we have .   "
},
{
  "id": "th_adjoint_matrix",
  "level": "2",
  "url": "s_adjoint.html#th_adjoint_matrix",
  "type": "Theorem",
  "number": "1.21.9",
  "title": "Adjoint of a matrix transformation.",
  "body": " Adjoint of a matrix transformation   Assume , and let . For all and , we have , where and denote the standard inner products on and , respectively.  As a consequence, given a matrix transformation , we have , where the adjoint is taken with respect to the standard inner products on and .    Equation follows directly from equations , as these are precisely the adjoint properties for the matrix transformation . We prove (which is equivalent to ): .   "
},
{
  "id": "ss_adjoints-14",
  "level": "2",
  "url": "s_adjoint.html#ss_adjoints-14",
  "type": "Remark",
  "number": "1.21.10",
  "title": "Adjoint of real matrix transformation.",
  "body": " Adjoint of real matrix transformation  As usual, observe that if complex conjugation operation can be disregarded. Let's give a quick summary of what the previous definitions and theorems boil down to in this setting.   Given , we have .    Given , we have .    Given , we have .     "
},
{
  "id": "cor_adj_matrix_reps",
  "level": "2",
  "url": "s_adjoint.html#cor_adj_matrix_reps",
  "type": "Corollary",
  "number": "1.21.11",
  "title": "Matrix representation of adjoint.",
  "body": " Matrix representation of adjoint   Let be an inner product space of finite dimension , and let be an orthonormal basis of . Given and adjoint , we have . More generally, given , we have .    It suffices to show the equivalence . The key ingredients to the proof are summarized as follows:   Since is an orthormal basis, we have , where the inner products on the right is the standard one on .    Matrices satisfy for all and if and only if . This follows from and uniqueness of the adjoint (if it exists).   We now prove the equivalence: .   "
},
{
  "id": "ss_adjoints-16",
  "level": "2",
  "url": "s_adjoint.html#ss_adjoints-16",
  "type": "Warning",
  "number": "1.21.12",
  "title": "Matrix representation of adjoint.",
  "body": " Matrix representation of adjoint  It is absolutely essential that the basis in in is orthonormal. As an example of what can go wrong when this condition is dropped, consider , where . According to , we have , where the adjoint is taken with respect to the standard inner product on . Of course, if we pick to be the standard basis of , which is orthonormal with respect to this inner product, we have , and we see that , as predicted by . Now consider the non-orthonormal basis . We readily compute , and observe that in this case.  "
},
{
  "id": "ss_adjoints-17",
  "level": "2",
  "url": "s_adjoint.html#ss_adjoints-17",
  "type": "Remark",
  "number": "1.21.13",
  "title": "Matrix representation of adjoint.",
  "body": " Matrix representation of adjoint  Not surprisingly, a more general version of holds for linear operators between two different finite-dimensional inner product spaces. However, in that setting we need to choose two bases and , and consider the matrix represetations and , resulting in some thorny notation. . I thought the generalized result was not interesting enough to justify this notational.  It is also worth noting that the equivalence in implies the existence of adjoints in the setting it specified. However, guarantees the existence of adjoints in a much more general setting.  "
},
{
  "id": "eg_adjoint_inclusion",
  "level": "2",
  "url": "s_adjoint.html#eg_adjoint_inclusion",
  "type": "Example",
  "number": "1.21.14",
  "title": "Adjoint of inclusion map.",
  "body": " Adjoint of inclusion map   Let be a finite-dimensional subspace of the inner product space , and let be the inclusion map. Given an explicit description of the adjoint map .    Since is finite dimensional, we have , and can define the orthogonal projection map . We claim that , and prove our claim by showing that for all and . Given any , we write , where by definition and . It follows that for any , we have , as desired.   "
},
{
  "id": "eg_adjoint_deriv",
  "level": "2",
  "url": "s_adjoint.html#eg_adjoint_deriv",
  "type": "Example",
  "number": "1.21.15",
  "title": "Derivative operator.",
  "body": " Derivative operator   Let be the set of functions of period 1. The operation defines an inner product on . It is easy to show that if , then : , the derivative of a period-1 function is a period-1 function. Thus we can define a linear transformation . Show that .    Observe that , by definition. We must show that satisfies the adjoint property with respect to . Given any , we have .   "
},
{
  "id": "eg_adjoint_integration_kernel",
  "level": "2",
  "url": "s_adjoint.html#eg_adjoint_integration_kernel",
  "type": "Example",
  "number": "1.21.16",
  "title": "Integral transformation.",
  "body": " Integral transformation   Let be a closed interval in . Let , be a continuous function. Given any , you can show that the integral function is continuous on and that the resulting map is a linear transformation. Show, using Fubini's theorem for double integrals, that the adjoint of is the function .    This is left as an exercise.   "
},
{
  "id": "d_lin_functional",
  "level": "2",
  "url": "s_adjoint.html#d_lin_functional",
  "type": "Definition",
  "number": "1.21.17",
  "title": "Linear functional.",
  "body": " Linear functional   Let be a vector space. A linear functional on is a linear transformation from to . The vector space of all linear functionals on is called the dual space of , and is denoted .   "
},
{
  "id": "th_Riesz_rep",
  "level": "2",
  "url": "s_adjoint.html#th_Riesz_rep",
  "type": "Theorem",
  "number": "1.21.18",
  "title": "Riesz representation.",
  "body": " Riesz representation   Let be an inner product space.   For all , the function defined as is a linear functional.    The function , where is injective and satisfies . In other words, is conjugate linear .    Assume . In this case the map above is bijective. In particular, given a linear functional , there is a unique vector such that : , such that for all .          This was already proved in . The current statement is just a slight reformulation of this fact, using the language of linear functionals.    We use the 1-step technique. Given any and , the function satisfies for all . Thus : , .  We now show is injective. Given , we have . Thus is injective.    Let . Since , by we have . Since is conjugate linear, and not linear, we cannot invoke directly to conclude that it is surjective. However, the same result does in fact apply to conjugate linear maps for the following two reasons (left to the reader to prove):   the image of a conjugate linear map is a subspace of the codomain (just as with linear maps);    the image of a linearly independent tuple under an injective conjugate linear map is a linearly independent tuple.   Let be a basis of . From the two points above, we see that is a subspace of containing the linearly independent tuple . It follows that , and thus that , as desired.  Alternatively, we can give a more constructive proof of the surjectivity of as follows:   pick an orthonormal basis of ;    given , let for all ;    let ;    for all , we have ;    since and agree on the basis , we have .         "
},
{
  "id": "th_adjoint",
  "level": "2",
  "url": "s_adjoint.html#th_adjoint",
  "type": "Theorem",
  "number": "1.21.19",
  "title": "Adjoint of a transformation.",
  "body": " Adjoint of a transformation   Let and be inner product spaces, and assume is finite dimensional. Every linear transformation has a unique adjoint .    First we prove the existence of by defining it explicitly via a somewhat involved recipe. Given any , the function is easily seen to be a linear functional on : , . By there is a unique vector satisfying for all . We define .  Having defined as a function,, we now show that it satisfies equation ; equation then follows immediately from the conjugate symmetry property. Given any , we have , as desired.  The uniqueness and linearity of follow from .   "
},
{
  "id": "th_adjoint_null_im",
  "level": "2",
  "url": "s_adjoint.html#th_adjoint_null_im",
  "type": "Theorem",
  "number": "1.21.20",
  "title": "Null space and image of adjoint.",
  "body": " Null space and image of adjoint   Let and be inner product spaces. Assume has adjoint .    We have .     We have . If we assume further that , then .       Assume exists. We first prove that . We have . Thus .  To prove that , we use the fact that and apply the result above to compute . Thus . Since is finite dimensional, we have , and thus , as desired.   "
},
{
  "id": "s_normal",
  "level": "1",
  "url": "s_normal.html",
  "type": "Section",
  "number": "1.22",
  "title": "Normal operators",
  "body": " Normal operators   Normal operator   Let be a linear operator on the inner product space , and suppose has an adjoint . We say is normal if it commutes with : , if .     Self-adjoint, skew-Hermitian, unitary   Let be an inner product space. Below we define several special types of normal operators. Let and suppose has an adjoint .   Self-adjoint   is self-adjoint (or symmetric when ) if .    Skew-Hermitian   is skew-Hermitian (or skew-symmetric when ) if .    Unitary   is unitary (or orthogonal when ) if is invertible and .        Self-adjoint, skew-Hermitian, unitary  To show each of the subtypes described in is indeed normal we simply have to show that an operator of a given type satisfies . This is not difficult: .    Orthogonal projection   Let be a finite-dimensional subspace of the inner product space , and let be orthogonal projection onto . Show that is self-adjoint.    This is part of a homework exercise.      Derivative operator   Let be the subspace of real periodic functions on with period . Recall that the derivative operator defined as has adjoint with respect to the inner product . Hence is skew-symmetric. In particular, is normal.    The following matrix-based result gives us an easy way of producing normal operators of varying types.   Normality and matrix representations   Let be a finite-dimensional inner product space, let , let be an orthonormal basis of , and let .    is normal if and only if .     is self-adjoint if and only if .     is skew-symmetric if and only if .     is unitary if and only if is invertible and .       The equivalences are simple consequences of the following facts:    for all ( );     for all ( ).       The next theorem tells us that these various types of normality are preserved by familiar operations on linear transformations.   Normality preserved   Let be an inner product space. Let , , , and denote the sets of normal, self-adjoint, skew-Hermitian, and unitary operators on , respectively.    if and only if .    If , then for all .    If , then for any positive integer .       The statements follow easily from elementary properties of the adjoint ( ).     Polar identities   Let be an inner product space. For all , we have , or equivalently, . As a consequence, if , then we have .    This is a simple, if somewhat tedious exercise of expanding out the right side of using the definition , and then simplifying using properties of the inner product, and the fact that for all .     Normality equivalence   Let be a linear operator on the inner product space . The following statements are equivalent.    is normal.     for all .     for all .       We prove a cycle of implications.  If is normal, then . Taking square-roots of both sides (and using the fact that norms are nonnegative), we conclude that . This proves (1) (2).  To prove (2) (3), we use the polarity identity. If for all , then we have      Normal operator properties   Let be an inner product space, and assume is normal.    if and only if . As a consequence, we have .     if and only if . As a consequence, we have for all .    Finite-dimensional space  Assume further that . We have and .       Assume is normal.   We have . Thus .    Since and are normal, so is, for any by . Applying the result in (1) to , we have .    If we assume is finite dimensional, then we have . It follows that .       "
},
{
  "id": "d_normal",
  "level": "2",
  "url": "s_normal.html#d_normal",
  "type": "Definition",
  "number": "1.22.1",
  "title": "Normal operator.",
  "body": " Normal operator   Let be a linear operator on the inner product space , and suppose has an adjoint . We say is normal if it commutes with : , if .   "
},
{
  "id": "d_normal_egs",
  "level": "2",
  "url": "s_normal.html#d_normal_egs",
  "type": "Definition",
  "number": "1.22.2",
  "title": "Self-adjoint, skew-Hermitian, unitary.",
  "body": " Self-adjoint, skew-Hermitian, unitary   Let be an inner product space. Below we define several special types of normal operators. Let and suppose has an adjoint .   Self-adjoint   is self-adjoint (or symmetric when ) if .    Skew-Hermitian   is skew-Hermitian (or skew-symmetric when ) if .    Unitary   is unitary (or orthogonal when ) if is invertible and .      "
},
{
  "id": "s_normal-4",
  "level": "2",
  "url": "s_normal.html#s_normal-4",
  "type": "Remark",
  "number": "1.22.3",
  "title": "Self-adjoint, skew-Hermitian, unitary.",
  "body": " Self-adjoint, skew-Hermitian, unitary  To show each of the subtypes described in is indeed normal we simply have to show that an operator of a given type satisfies . This is not difficult: .  "
},
{
  "id": "eg_ortho_proj",
  "level": "2",
  "url": "s_normal.html#eg_ortho_proj",
  "type": "Example",
  "number": "1.22.4",
  "title": "Orthogonal projection.",
  "body": " Orthogonal projection   Let be a finite-dimensional subspace of the inner product space , and let be orthogonal projection onto . Show that is self-adjoint.    This is part of a homework exercise.    "
},
{
  "id": "eg_derivative_skew-symm",
  "level": "2",
  "url": "s_normal.html#eg_derivative_skew-symm",
  "type": "Example",
  "number": "1.22.5",
  "title": "Derivative operator.",
  "body": " Derivative operator   Let be the subspace of real periodic functions on with period . Recall that the derivative operator defined as has adjoint with respect to the inner product . Hence is skew-symmetric. In particular, is normal.   "
},
{
  "id": "th_normal_matrix_rep",
  "level": "2",
  "url": "s_normal.html#th_normal_matrix_rep",
  "type": "Theorem",
  "number": "1.22.6",
  "title": "Normality and matrix representations.",
  "body": " Normality and matrix representations   Let be a finite-dimensional inner product space, let , let be an orthonormal basis of , and let .    is normal if and only if .     is self-adjoint if and only if .     is skew-symmetric if and only if .     is unitary if and only if is invertible and .       The equivalences are simple consequences of the following facts:    for all ( );     for all ( ).      "
},
{
  "id": "th_normal_preserved",
  "level": "2",
  "url": "s_normal.html#th_normal_preserved",
  "type": "Theorem",
  "number": "1.22.7",
  "title": "Normality preserved.",
  "body": " Normality preserved   Let be an inner product space. Let , , , and denote the sets of normal, self-adjoint, skew-Hermitian, and unitary operators on , respectively.    if and only if .    If , then for all .    If , then for any positive integer .       The statements follow easily from elementary properties of the adjoint ( ).   "
},
{
  "id": "th_polar_identities",
  "level": "2",
  "url": "s_normal.html#th_polar_identities",
  "type": "Theorem",
  "number": "1.22.8",
  "title": "Polar identities.",
  "body": " Polar identities   Let be an inner product space. For all , we have , or equivalently, . As a consequence, if , then we have .    This is a simple, if somewhat tedious exercise of expanding out the right side of using the definition , and then simplifying using properties of the inner product, and the fact that for all .   "
},
{
  "id": "th_normal_equiv",
  "level": "2",
  "url": "s_normal.html#th_normal_equiv",
  "type": "Theorem",
  "number": "1.22.9",
  "title": "Normality equivalence.",
  "body": " Normality equivalence   Let be a linear operator on the inner product space . The following statements are equivalent.    is normal.     for all .     for all .       We prove a cycle of implications.  If is normal, then . Taking square-roots of both sides (and using the fact that norms are nonnegative), we conclude that . This proves (1) (2).  To prove (2) (3), we use the polarity identity. If for all , then we have    "
},
{
  "id": "cor_normal_props",
  "level": "2",
  "url": "s_normal.html#cor_normal_props",
  "type": "Corollary",
  "number": "1.22.10",
  "title": "Normal operator properties.",
  "body": " Normal operator properties   Let be an inner product space, and assume is normal.    if and only if . As a consequence, we have .     if and only if . As a consequence, we have for all .    Finite-dimensional space  Assume further that . We have and .       Assume is normal.   We have . Thus .    Since and are normal, so is, for any by . Applying the result in (1) to , we have .    If we assume is finite dimensional, then we have . It follows that .      "
},
{
  "id": "s_spectral",
  "level": "1",
  "url": "s_spectral.html",
  "type": "Section",
  "number": "1.23",
  "title": "Spectral theorems",
  "body": " Spectral theorems   Among the many takeaways from is the simple fact that not all linear operators are diagonalizable. In principle gives a complete answer to the question of diagonalizability in terms of eigenspaces. However, you should not be mislead by the artificially simple examples treated in . In practice even the determination (or approximation) of the distinct eigenvalues of an matrix poses a very challenging computational problem as gets large. As such the general question of whether a matrix is diagonalizable remains an intractable one. This makes all the more welcoming the main results of this section: if is a finite-dimensional inner product space, then all normal operators on are diagonalizable (when ), and all self-adjoint operators are diagonalizable (when or ). These surprising facts are elaborated upon in the two spectral theorems of this section. These results in turn fit into a larger suite of more general spectral theorems that treat the diagonalizability of various families of linear operators of inner product spaces (both finite and infinite dimensional).    Spectral theorem for normal operators   Invariant subspace   Let . A subspace is -invariant if : equivalently, if implies .     Invariant subspace  In general, if and is a subspace of , then restricting to yields a situation summarized by the diagram below. (Here is the inclusion map.)   Commutative diagram for restriction    When is -invariant, on the other hand, we know that , yielding the the following commutative diagram.   Commutative diagram for restriction to invariant subspace    As you can see, when is -invariant, the restriction map can now be thought of as an operator on the smaller space : , we have . As we will see below, this can be useful in the context of proofs that proceed by induction on the dimension of a space.    Polynomial evaluation of operator   Let . Given a polynomial with coefficients , we define the operator as .     Polynomial conjugate   Let . Given a polynomial with coefficients , we define its conjugate  as .     Polynomial evaluation of operator   Let , and let and be polynomials with coefficients in .    and commute: , . In particular, commutes with : that is, we have .    If is a -invariant subspace, then is a -invariant subspace.    Assume and that is an inner product space. We have , where .    Assume and that is an inner product space. If is normal, then is normal.          Let and . First observe that for all integers , we have . It follows that .    First observe that if is - and -invariant for operators , then it is -invariant for any . Indeed, if , then and implies that . It follows by induction that if is -invariant for operators , , then it is -invariant for any . Next, an easy induction argument shows that if is -invariant, then it is -invariant for all . Thus, if is -invariant, then it is -invariant for all , and thus also -invariant for any . This shows is -invariant.    We have .    We have .        Invariant subspaces and adjoints   Let be a linear operator on the inner product space , and let be its adjoint.   If is -invariant, then is -invariant.    If is - and -invariant, then .          Assume is -\\invariant. For any and , we have . Thus implies , showing that is -invariant.    Assume is - and -invariant. This allows us to define maps and . Thus to show , we need only show that satisfies the adjoint property for all . But this is easy! We have .       Before getting to our first spectral theorem, we prove an interesting standalone fact about the eigenspaces of normal operators over any field.   Eigenspaces of normal operators   Let , and let be a normal operator on the finite-dimensional inner product space . Given distinct scalars , the eigenspaces and are orthogonal : , for all and .    Let and be distinct scalars. Take any vectors and and consider first the adjoint property . Since , we have . Since is normal, we have by , and thus . Putting it all together, we have . Since and , we conclude that , as desired.     Spectral theorem for normal operators:   Let , let be a nonzero finite-dimensional inner product space over , and let with distinct eigenvalues . The following statements are equivalent.    is normal.     and the eigenspaces are pairwise orthogonal : , if , then for all and .     is orthogonally diagonalizable : that is, there is an orthogonal (or orthonormal) eigenbasis of .    There is an orthogonal (or orthonormal) basis such that is diagonal.       We prove a cycle of implications (1) (2) (3) (4) (1). It turns out that only (1) (2) is the only implication that requires any work. Accordingly, we take care of the easier implications first.   Implication (2) (3)  From , we know that choosing any bases for each eigenspace and then concatenating these as yields an eigenbasis of . Since we know the eigenspaces are pairwise orthogonal, if we choose each to be an orthogonal (resp. orthonormal) basis, then resulting concatenated basis will be orthogonal (resp. orthonormal), since the elements of are orthogonal to the elements of for all . Thus is orthogonally diagonalizable.    Implication (3) (4)  We know from that if is an eigenbasis of , then is diagonal. Assuming (3), not only does there exist an eigenbasis of , but in fact we can find an orthogonal (or orthonormal) eigenbasis . We have for this choice of .    Implication (4) (1)  Assume is an orthonormal basis of such that is diagonal. For a diagonal matrix we have , and it is then easy to see that . Thus is a normal matrix. Since is orthonormal , it follows from that is normal.    Implication (1) (2)  We now turn to the last implication in our cycle. Assume is normal. By , the distinct eigenspaces of any normal operator are orthogonal, so it suffices to show that we have . We will do so by induction on the dimension of . More precisely, we will show that for all , given any normal operator on any  -dimensional complex inner product space of dimension , we have the direct sum decomposition into eigenspaces as specified in (2).  Base case: . If is -dimensional, then for any operator (normal or not) , we have for some , in which case and is the only eigenvalue of .  Now assume by (strong) induction that for all , for any normal operator on any -dimensional complex inner product space, we have the direct sum decomposition into eigenspaces as specified in (2). Let be a normal operator on the -dimensional inner product space . Since is an eigenvalue of , the eigenspace is nonzero.  If , then we have . It follows that is the only eigenvalue of , and is the desired direct sum decomposition into eigenspaces.  Assume that , and consider the direct sum decomposition . Since , we have . Our proof concludes as follows:   show that is both - and -invariant;    show that is normal;    apply the induction hypothesis to .   Let . We first show that is -invariant: given and , we have . Thus implies , as desired. Similarly, given any and , we have , showing that implies , as desired.  Since is - and -invariant, we know that by . Since for all , it follows from that is a normal operator on . Lastly, since we can apply our induction hypothesis to the normal operator on to conclude that , where is the set of distinct eigenvalues of . Since clearly, any eigenvalue of is an eigenvalue of , we conclude that , where are distinct eigenvalue of . It then follows easily that these are all of the distinct eigenvalues of .      Normal operator ( )   Let and consider the matrix transformation , where is given the standard Hermitian inner product.   Show that is normal, skew-Hermitian, and unitary!    Verify that (2) of applies for .          We have , where . It is easily verified that , and hence that is skew-Hermitian and unitary, and hence also normal.    The usual computations show that the characteristic polynomial of is , and that the nonzero eigenspaces of are . Since , we see that by . Lastly since . it follows that and are orthogonal.        Normal operator ( )   Let again, but now consider the matrix transformation . Just as in , has characteristic polynomial , and is normal, skew-symmetric (real version of skew-Hermitian), and orthogonal (real version of unitary). However, not only is not diagonalizable, it does not even have any eigenvalues! This illustrates the necessity of in .      Self-adjoint operators  If you look closely at the induction argument for the implication (1) (2) in , you see that the only thing we need to get the induction argument moving is the existence of an eigenvalue. By adding the condition to we guarantee the existence of this eigenvalue: this is because for any operator on a complex vector space of finite dimension, its characteristic polynomial of factors completely over as for scalars . Thus, our induction argument in could be adapted for the case, as long as the characteristic polynomial of the operators always factor completely over as in . Unfortunately, this is simply not the case for normal operators of real vector spaces. However, it is the case for self-adjoint operators, as the next result shows. Before getting to that, let's give a manageable name for this factoring property of a polynomial.   Splits completeley   Let be a field, and let be a polynomial with coefficients in . We say the  splits completely over if factors as , with for all .     Eigenvalues of self-adjoint operators   Let , let be an inner product space over , and let be a self-adjoint operator.   If is an eigenvalue , then . In other words, all eigenvalues of are real.    Assume further that . The characteristic polynomial of factors as , where for all , and for all .          Assume is a -eigenvector of . First observe that we have . Next, since , we have . Putting it all together, we have . Since and (since by definition), we conclude from (1) that , and hence that .    We treat the cases and separately.  If , then by the fundamental theorem of algebra the characteristic polynomial factors as , with for all . Since is self-adjoint, and since the are the eigenvalues of , we conclude that in fact for all , as desired.  Now assume . We can compute the characteristic polynomia of as , where is any matrix representation of with respect to an orthonormal basis . Now consider the complex matrix transformation . Since is self-adjoint and is orthonormal, the matrix is self-adjoint by . It then follows that is self-adjoint. From the previous case ( ), we conclude that the characteristic polynomial of factors as with . But (again by definition) the characteristic polynomial of is precisely , the characteristic polynomial of ! Thus splits completely over , as desired.        Spectral theorem for self-adjoint   Let , let be a finite-dimensional inner product space over , and let with distinct eigenvalues . The following statements are equivalent.    is self-adjoint.     for all , and the eigenspaces are pairwise orthogonal.     has real eigenvalues and is orthogonally diagonalizable.    There is an orthogonal (or orthonormal) basis such that is diagonal with real entries.       We may proceed almost identically to the proof of . As in that proof we prove a cycle of implications (1) (2) (3) (4) (1). And as in that previous proof, the chain of implications (2) (3) (4) (1) is easily established. We leave that mostly to the reader, but point out that for the implication (4) (1), we need the entries of to be real in order to have (and hence ).  Now consider the implication (1) (2). Assume is self-adjoint. Since in particular is normal, we know that the eigenspaces of are orthogonal by ; and since is self-adjoint we know that the eigenvalues of are real by . It remains only to show that , and we prove this using the exact same induction argument as in . As such we can in good conscience content ourselves with a sketch of how this argument plays out in this case:   Since the characteristic polynomial of splits completelely over , there is an eigenvalue and nonzero eigenspace .    Consider the orthogonal decomposition .    Since is self-adjoint (and hence normal) the space is both - and -invariant.    Since is self-adjoint, it follows easily that the restriction is also self-adjoint.    The induction hypothesis then applies to the smaller space , allowing us to decompose into further eigenspaces of , and giving us the full decomposition of into eigenspaces of .        "
},
{
  "id": "d_inv",
  "level": "2",
  "url": "s_spectral.html#d_inv",
  "type": "Definition",
  "number": "1.23.1",
  "title": "Invariant subspace.",
  "body": " Invariant subspace   Let . A subspace is -invariant if : equivalently, if implies .   "
},
{
  "id": "ss_spectral_normal-3",
  "level": "2",
  "url": "s_spectral.html#ss_spectral_normal-3",
  "type": "Remark",
  "number": "1.23.2",
  "title": "Invariant subspace.",
  "body": " Invariant subspace  In general, if and is a subspace of , then restricting to yields a situation summarized by the diagram below. (Here is the inclusion map.)   Commutative diagram for restriction    When is -invariant, on the other hand, we know that , yielding the the following commutative diagram.   Commutative diagram for restriction to invariant subspace    As you can see, when is -invariant, the restriction map can now be thought of as an operator on the smaller space : , we have . As we will see below, this can be useful in the context of proofs that proceed by induction on the dimension of a space.  "
},
{
  "id": "d_polynomial_eval_ops",
  "level": "2",
  "url": "s_spectral.html#d_polynomial_eval_ops",
  "type": "Definition",
  "number": "1.23.3",
  "title": "Polynomial evaluation of operator.",
  "body": " Polynomial evaluation of operator   Let . Given a polynomial with coefficients , we define the operator as .   "
},
{
  "id": "d_poly_conj",
  "level": "2",
  "url": "s_spectral.html#d_poly_conj",
  "type": "Definition",
  "number": "1.23.4",
  "title": "Polynomial conjugate.",
  "body": " Polynomial conjugate   Let . Given a polynomial with coefficients , we define its conjugate  as .   "
},
{
  "id": "th_polynomial_eval_ops",
  "level": "2",
  "url": "s_spectral.html#th_polynomial_eval_ops",
  "type": "Theorem",
  "number": "1.23.5",
  "title": "Polynomial evaluation of operator.",
  "body": " Polynomial evaluation of operator   Let , and let and be polynomials with coefficients in .    and commute: , . In particular, commutes with : that is, we have .    If is a -invariant subspace, then is a -invariant subspace.    Assume and that is an inner product space. We have , where .    Assume and that is an inner product space. If is normal, then is normal.          Let and . First observe that for all integers , we have . It follows that .    First observe that if is - and -invariant for operators , then it is -invariant for any . Indeed, if , then and implies that . It follows by induction that if is -invariant for operators , , then it is -invariant for any . Next, an easy induction argument shows that if is -invariant, then it is -invariant for all . Thus, if is -invariant, then it is -invariant for all , and thus also -invariant for any . This shows is -invariant.    We have .    We have .      "
},
{
  "id": "th_invariant_adoints",
  "level": "2",
  "url": "s_spectral.html#th_invariant_adoints",
  "type": "Theorem",
  "number": "1.23.6",
  "title": "Invariant subspaces and adjoints.",
  "body": " Invariant subspaces and adjoints   Let be a linear operator on the inner product space , and let be its adjoint.   If is -invariant, then is -invariant.    If is - and -invariant, then .          Assume is -\\invariant. For any and , we have . Thus implies , showing that is -invariant.    Assume is - and -invariant. This allows us to define maps and . Thus to show , we need only show that satisfies the adjoint property for all . But this is easy! We have .      "
},
{
  "id": "th_normal_eigenspaces",
  "level": "2",
  "url": "s_spectral.html#th_normal_eigenspaces",
  "type": "Theorem",
  "number": "1.23.7",
  "title": "Eigenspaces of normal operators.",
  "body": " Eigenspaces of normal operators   Let , and let be a normal operator on the finite-dimensional inner product space . Given distinct scalars , the eigenspaces and are orthogonal : , for all and .    Let and be distinct scalars. Take any vectors and and consider first the adjoint property . Since , we have . Since is normal, we have by , and thus . Putting it all together, we have . Since and , we conclude that , as desired.   "
},
{
  "id": "th_spectral_normal",
  "level": "2",
  "url": "s_spectral.html#th_spectral_normal",
  "type": "Theorem",
  "number": "1.23.8",
  "title": "Spectral theorem for normal operators: <span class=\"process-math\">\\(F=\\C\\)<\/span>.",
  "body": " Spectral theorem for normal operators:   Let , let be a nonzero finite-dimensional inner product space over , and let with distinct eigenvalues . The following statements are equivalent.    is normal.     and the eigenspaces are pairwise orthogonal : , if , then for all and .     is orthogonally diagonalizable : that is, there is an orthogonal (or orthonormal) eigenbasis of .    There is an orthogonal (or orthonormal) basis such that is diagonal.       We prove a cycle of implications (1) (2) (3) (4) (1). It turns out that only (1) (2) is the only implication that requires any work. Accordingly, we take care of the easier implications first.   Implication (2) (3)  From , we know that choosing any bases for each eigenspace and then concatenating these as yields an eigenbasis of . Since we know the eigenspaces are pairwise orthogonal, if we choose each to be an orthogonal (resp. orthonormal) basis, then resulting concatenated basis will be orthogonal (resp. orthonormal), since the elements of are orthogonal to the elements of for all . Thus is orthogonally diagonalizable.    Implication (3) (4)  We know from that if is an eigenbasis of , then is diagonal. Assuming (3), not only does there exist an eigenbasis of , but in fact we can find an orthogonal (or orthonormal) eigenbasis . We have for this choice of .    Implication (4) (1)  Assume is an orthonormal basis of such that is diagonal. For a diagonal matrix we have , and it is then easy to see that . Thus is a normal matrix. Since is orthonormal , it follows from that is normal.    Implication (1) (2)  We now turn to the last implication in our cycle. Assume is normal. By , the distinct eigenspaces of any normal operator are orthogonal, so it suffices to show that we have . We will do so by induction on the dimension of . More precisely, we will show that for all , given any normal operator on any  -dimensional complex inner product space of dimension , we have the direct sum decomposition into eigenspaces as specified in (2).  Base case: . If is -dimensional, then for any operator (normal or not) , we have for some , in which case and is the only eigenvalue of .  Now assume by (strong) induction that for all , for any normal operator on any -dimensional complex inner product space, we have the direct sum decomposition into eigenspaces as specified in (2). Let be a normal operator on the -dimensional inner product space . Since is an eigenvalue of , the eigenspace is nonzero.  If , then we have . It follows that is the only eigenvalue of , and is the desired direct sum decomposition into eigenspaces.  Assume that , and consider the direct sum decomposition . Since , we have . Our proof concludes as follows:   show that is both - and -invariant;    show that is normal;    apply the induction hypothesis to .   Let . We first show that is -invariant: given and , we have . Thus implies , as desired. Similarly, given any and , we have , showing that implies , as desired.  Since is - and -invariant, we know that by . Since for all , it follows from that is a normal operator on . Lastly, since we can apply our induction hypothesis to the normal operator on to conclude that , where is the set of distinct eigenvalues of . Since clearly, any eigenvalue of is an eigenvalue of , we conclude that , where are distinct eigenvalue of . It then follows easily that these are all of the distinct eigenvalues of .    "
},
{
  "id": "eg_spec_normal",
  "level": "2",
  "url": "s_spectral.html#eg_spec_normal",
  "type": "Example",
  "number": "1.23.9",
  "title": "Normal operator (<span class=\"process-math\">\\(F=\\C\\)<\/span>).",
  "body": " Normal operator ( )   Let and consider the matrix transformation , where is given the standard Hermitian inner product.   Show that is normal, skew-Hermitian, and unitary!    Verify that (2) of applies for .          We have , where . It is easily verified that , and hence that is skew-Hermitian and unitary, and hence also normal.    The usual computations show that the characteristic polynomial of is , and that the nonzero eigenspaces of are . Since , we see that by . Lastly since . it follows that and are orthogonal.      "
},
{
  "id": "eg_spect_normal_real",
  "level": "2",
  "url": "s_spectral.html#eg_spect_normal_real",
  "type": "Example",
  "number": "1.23.10",
  "title": "Normal operator (<span class=\"process-math\">\\(F=\\R\\)<\/span>).",
  "body": " Normal operator ( )   Let again, but now consider the matrix transformation . Just as in , has characteristic polynomial , and is normal, skew-symmetric (real version of skew-Hermitian), and orthogonal (real version of unitary). However, not only is not diagonalizable, it does not even have any eigenvalues! This illustrates the necessity of in .   "
},
{
  "id": "d_splits_completely",
  "level": "2",
  "url": "s_spectral.html#d_splits_completely",
  "type": "Definition",
  "number": "1.23.11",
  "title": "Splits completeley.",
  "body": " Splits completeley   Let be a field, and let be a polynomial with coefficients in . We say the  splits completely over if factors as , with for all .   "
},
{
  "id": "th_selfadj_eigenvalues_real",
  "level": "2",
  "url": "s_spectral.html#th_selfadj_eigenvalues_real",
  "type": "Theorem",
  "number": "1.23.12",
  "title": "Eigenvalues of self-adjoint operators.",
  "body": " Eigenvalues of self-adjoint operators   Let , let be an inner product space over , and let be a self-adjoint operator.   If is an eigenvalue , then . In other words, all eigenvalues of are real.    Assume further that . The characteristic polynomial of factors as , where for all , and for all .          Assume is a -eigenvector of . First observe that we have . Next, since , we have . Putting it all together, we have . Since and (since by definition), we conclude from (1) that , and hence that .    We treat the cases and separately.  If , then by the fundamental theorem of algebra the characteristic polynomial factors as , with for all . Since is self-adjoint, and since the are the eigenvalues of , we conclude that in fact for all , as desired.  Now assume . We can compute the characteristic polynomia of as , where is any matrix representation of with respect to an orthonormal basis . Now consider the complex matrix transformation . Since is self-adjoint and is orthonormal, the matrix is self-adjoint by . It then follows that is self-adjoint. From the previous case ( ), we conclude that the characteristic polynomial of factors as with . But (again by definition) the characteristic polynomial of is precisely , the characteristic polynomial of ! Thus splits completely over , as desired.      "
},
{
  "id": "th_spectral_selfadj",
  "level": "2",
  "url": "s_spectral.html#th_spectral_selfadj",
  "type": "Theorem",
  "number": "1.23.13",
  "title": "Spectral theorem for self-adjoint.",
  "body": " Spectral theorem for self-adjoint   Let , let be a finite-dimensional inner product space over , and let with distinct eigenvalues . The following statements are equivalent.    is self-adjoint.     for all , and the eigenspaces are pairwise orthogonal.     has real eigenvalues and is orthogonally diagonalizable.    There is an orthogonal (or orthonormal) basis such that is diagonal with real entries.       We may proceed almost identically to the proof of . As in that proof we prove a cycle of implications (1) (2) (3) (4) (1). And as in that previous proof, the chain of implications (2) (3) (4) (1) is easily established. We leave that mostly to the reader, but point out that for the implication (4) (1), we need the entries of to be real in order to have (and hence ).  Now consider the implication (1) (2). Assume is self-adjoint. Since in particular is normal, we know that the eigenspaces of are orthogonal by ; and since is self-adjoint we know that the eigenvalues of are real by . It remains only to show that , and we prove this using the exact same induction argument as in . As such we can in good conscience content ourselves with a sketch of how this argument plays out in this case:   Since the characteristic polynomial of splits completelely over , there is an eigenvalue and nonzero eigenspace .    Consider the orthogonal decomposition .    Since is self-adjoint (and hence normal) the space is both - and -invariant.    Since is self-adjoint, it follows easily that the restriction is also self-adjoint.    The induction hypothesis then applies to the smaller space , allowing us to decompose into further eigenspaces of , and giving us the full decomposition of into eigenspaces of .      "
},
{
  "id": "s_caylet_ham",
  "level": "1",
  "url": "s_caylet_ham.html",
  "type": "Section",
  "number": "1.24",
  "title": "Cayley-Hamilton theorem",
  "body": " Cayley-Hamilton theorem   Polynomial theory   Polynomial divisibility   Let be a field. Recall that is the set of all polynomials with coefficients in .   Divisibility  Given polynomials , we say the  divides  if there is a polynomial satisfying . In this case we call a multiple of , a factor of , and the equation a factorization of .    Irreducible polynomial  A nonconstant polynomial is irreducible if it has no nontrivial factorization: more precisely, if for , then is a constant polynomial or is a constant polynomial.    Division algorithm  Given polynomials with , there is a unique pair of polynomials satisfying the following conditions: . We call and the quotient and remainder , respectively, upon dividing by .         Cayley-Hamilton theorem   Invariant subspaces and characteristic polynomial   Let be a finite-dimensional vector space. Given an operator , and let be a -invariant subspace.         -cyclic subspace   Let . Given a vector , the -cyclic subspace generated by is defined as .     -cyclic subspace   Let , let , and let .    is a -invariant subspace of .    If is a -invariant subspace of containing , then : , is the smallest -invariant subspace of containing .    If , then there is a such that is a basis of .            Invariance and characteristic polynomial   Let , where is a finite-dimensional vector space, and let be a -invariant subspace. If is the characteristic polynomial of and is the characteristic polynomial of , then . In other words, we have for some .         Multiplicity   Let . Suppose is a root of and let be a factorization of satisfying . The integer is called the multiplicity of the root .     Multiplicity of eigenvalues   Let , where is finite dimensional, let be the characteristic polynomial of , and let be an eigenvalue of .   Algebraic multiplicity  The algebraic multiplicity of is its multiplicity as a root of : the algebraic multiplicity of is the positive integer such that for some satisfying .    Geometric multiplicity  The geometric multiplicity of is defined as .         Let , where is finite dimensional, let be the characteristic polynomial of . Let be an eigenvalue of of algebraic multiplicity : , suppose factors as , where . The geometric multiplicity of is bounded above by the algebraic multiplicity: , .     Cayley-Hamilton theorem   Let , where is finite dimensional, and let be the characteristic polynomial of . We have . In other words, is a root of its own characteristic polynomial.          Minimal polynomial   Minimal polynomial   Let , where is finite dimensional. The minimal polynomial of is the unique monic polynomial of minimal degree satisfying .     Minimal polynomial   Let , where is finite dimensional and let be the minimal polymonial of . If satisfies , then : , we have for some . In particular, if is the characteristic polynomial of , then .         Minimal polynomial and characteristic polynomial   Let , where is finite dimensional, let and be the characteristic and minimal polynomials of , respectively. If splits completely over as , then splits completely as , where for all . In other words, and both split completely over and have the same set of roots.     "
},
{
  "id": "d_poly_divis",
  "level": "2",
  "url": "s_caylet_ham.html#d_poly_divis",
  "type": "Definition",
  "number": "1.24.1",
  "title": "Polynomial divisibility.",
  "body": " Polynomial divisibility   Let be a field. Recall that is the set of all polynomials with coefficients in .   Divisibility  Given polynomials , we say the  divides  if there is a polynomial satisfying . In this case we call a multiple of , a factor of , and the equation a factorization of .    Irreducible polynomial  A nonconstant polynomial is irreducible if it has no nontrivial factorization: more precisely, if for , then is a constant polynomial or is a constant polynomial.    Division algorithm  Given polynomials with , there is a unique pair of polynomials satisfying the following conditions: . We call and the quotient and remainder , respectively, upon dividing by .      "
},
{
  "id": "th_invar_char_poly",
  "level": "2",
  "url": "s_caylet_ham.html#th_invar_char_poly",
  "type": "Theorem",
  "number": "1.24.2",
  "title": "Invariant subspaces and characteristic polynomial.",
  "body": " Invariant subspaces and characteristic polynomial   Let be a finite-dimensional vector space. Given an operator , and let be a -invariant subspace.       "
},
{
  "id": "d_Tcyclic_subspace",
  "level": "2",
  "url": "s_caylet_ham.html#d_Tcyclic_subspace",
  "type": "Definition",
  "number": "1.24.3",
  "title": "<span class=\"process-math\">\\(T\\)<\/span>-cyclic subspace.",
  "body": " -cyclic subspace   Let . Given a vector , the -cyclic subspace generated by is defined as .   "
},
{
  "id": "th_Tcyclic_sub",
  "level": "2",
  "url": "s_caylet_ham.html#th_Tcyclic_sub",
  "type": "Theorem",
  "number": "1.24.4",
  "title": "<span class=\"process-math\">\\(T\\)<\/span>-cyclic subspace.",
  "body": " -cyclic subspace   Let , let , and let .    is a -invariant subspace of .    If is a -invariant subspace of containing , then : , is the smallest -invariant subspace of containing .    If , then there is a such that is a basis of .          "
},
{
  "id": "th_char_poly_inv",
  "level": "2",
  "url": "s_caylet_ham.html#th_char_poly_inv",
  "type": "Theorem",
  "number": "1.24.5",
  "title": "Invariance and characteristic polynomial.",
  "body": " Invariance and characteristic polynomial   Let , where is a finite-dimensional vector space, and let be a -invariant subspace. If is the characteristic polynomial of and is the characteristic polynomial of , then . In other words, we have for some .       "
},
{
  "id": "d_multiplicity",
  "level": "2",
  "url": "s_caylet_ham.html#d_multiplicity",
  "type": "Definition",
  "number": "1.24.6",
  "title": "Multiplicity.",
  "body": " Multiplicity   Let . Suppose is a root of and let be a factorization of satisfying . The integer is called the multiplicity of the root .   "
},
{
  "id": "d_multiplicity_eigenvalues",
  "level": "2",
  "url": "s_caylet_ham.html#d_multiplicity_eigenvalues",
  "type": "Definition",
  "number": "1.24.7",
  "title": "Multiplicity of eigenvalues.",
  "body": " Multiplicity of eigenvalues   Let , where is finite dimensional, let be the characteristic polynomial of , and let be an eigenvalue of .   Algebraic multiplicity  The algebraic multiplicity of is its multiplicity as a root of : the algebraic multiplicity of is the positive integer such that for some satisfying .    Geometric multiplicity  The geometric multiplicity of is defined as .      "
},
{
  "id": "cor_alg_geom_mult",
  "level": "2",
  "url": "s_caylet_ham.html#cor_alg_geom_mult",
  "type": "Corollary",
  "number": "1.24.8",
  "title": "",
  "body": "  Let , where is finite dimensional, let be the characteristic polynomial of . Let be an eigenvalue of of algebraic multiplicity : , suppose factors as , where . The geometric multiplicity of is bounded above by the algebraic multiplicity: , .   "
},
{
  "id": "th_cayley_ham",
  "level": "2",
  "url": "s_caylet_ham.html#th_cayley_ham",
  "type": "Theorem",
  "number": "1.24.9",
  "title": "Cayley-Hamilton theorem.",
  "body": " Cayley-Hamilton theorem   Let , where is finite dimensional, and let be the characteristic polynomial of . We have . In other words, is a root of its own characteristic polynomial.       "
},
{
  "id": "d_min_poly",
  "level": "2",
  "url": "s_caylet_ham.html#d_min_poly",
  "type": "Definition",
  "number": "1.24.10",
  "title": "Minimal polynomial.",
  "body": " Minimal polynomial   Let , where is finite dimensional. The minimal polynomial of is the unique monic polynomial of minimal degree satisfying .   "
},
{
  "id": "th_min_poly",
  "level": "2",
  "url": "s_caylet_ham.html#th_min_poly",
  "type": "Theorem",
  "number": "1.24.11",
  "title": "Minimal polynomial.",
  "body": " Minimal polynomial   Let , where is finite dimensional and let be the minimal polymonial of . If satisfies , then : , we have for some . In particular, if is the characteristic polynomial of , then .       "
},
{
  "id": "cor_min_poly",
  "level": "2",
  "url": "s_caylet_ham.html#cor_min_poly",
  "type": "Corollary",
  "number": "1.24.12",
  "title": "Minimal polynomial and characteristic polynomial.",
  "body": " Minimal polynomial and characteristic polynomial   Let , where is finite dimensional, let and be the characteristic and minimal polynomials of , respectively. If splits completely over as , then splits completely as , where for all . In other words, and both split completely over and have the same set of roots.   "
},
{
  "id": "s_gen_eigenspace",
  "level": "1",
  "url": "s_gen_eigenspace.html",
  "type": "Section",
  "number": "1.25",
  "title": "Generalized eigenspaces",
  "body": " Generalized eigenspaces   Generalized eigenspace   Let , where is finite dimensional. Given we define the generalized eigenspace  associated to (or -generalized eigenspace) to be . A generalized -eigenvector of is a nonzero element of .     Generalized eigenspaces   Let , where is finite dimensional.   For all , is a -invariant subspace and .     for .    Let be an eigenvalue of of algebraic multiplicty . We have and .            Generalized eigenspace decomposition   Let , where is finite dimensional, and assume the characteristic polynomial of factors as , where are the distinct eigenvalues of . We have the following direct sum decomposition of : .         Relatively prime polynomials   Let be a field. Polynomials are relatively prime if they have no nonconstant common factor: , if satisfies and , then for some .  More generally a finite list of polynomials is relatively prime if there is no nonconstant factor common to all the : , if satisfies for all , then for some .     Relatively prime polynomials   Let be a field, and let be a relatively prime list of polynomials. There are polynomials such that .    The proof, though not difficult, lies somewhat outside the scope of this course. This and other results about the theory of polynomials is covered in the ring theory portion of a course in abstract algebra. Moreover, it is an instance of a more general result involving the greatest common divisor of the polynomials .     Factorization of polynomials   Let be a field, and let be a nonzero polynomial.   Irreducible factorization  We can factor in the form , where the factors are pairwise relatively prime, monic irreducible polynomials.    Uniqueness of factorization  The scalar , set of monic irreducible polynomials and powers are all uniquely determined by .       The proof, though not difficult, lies somewhat outside the scope of this course. This and other results about the theory of polynomials is covered in the ring theory portion of a course in abstract algebra.    "
},
{
  "id": "d_gen_eigenspace",
  "level": "2",
  "url": "s_gen_eigenspace.html#d_gen_eigenspace",
  "type": "Definition",
  "number": "1.25.1",
  "title": "Generalized eigenspace.",
  "body": " Generalized eigenspace   Let , where is finite dimensional. Given we define the generalized eigenspace  associated to (or -generalized eigenspace) to be . A generalized -eigenvector of is a nonzero element of .   "
},
{
  "id": "th_gen_eigenspace",
  "level": "2",
  "url": "s_gen_eigenspace.html#th_gen_eigenspace",
  "type": "Theorem",
  "number": "1.25.2",
  "title": "Generalized eigenspaces.",
  "body": " Generalized eigenspaces   Let , where is finite dimensional.   For all , is a -invariant subspace and .     for .    Let be an eigenvalue of of algebraic multiplicty . We have and .          "
},
{
  "id": "th_gen_eigenspace_decomp",
  "level": "2",
  "url": "s_gen_eigenspace.html#th_gen_eigenspace_decomp",
  "type": "Theorem",
  "number": "1.25.3",
  "title": "Generalized eigenspace decomposition.",
  "body": " Generalized eigenspace decomposition   Let , where is finite dimensional, and assume the characteristic polynomial of factors as , where are the distinct eigenvalues of . We have the following direct sum decomposition of : .       "
},
{
  "id": "d_relatively_prime",
  "level": "2",
  "url": "s_gen_eigenspace.html#d_relatively_prime",
  "type": "Definition",
  "number": "1.25.4",
  "title": "Relatively prime polynomials.",
  "body": " Relatively prime polynomials   Let be a field. Polynomials are relatively prime if they have no nonconstant common factor: , if satisfies and , then for some .  More generally a finite list of polynomials is relatively prime if there is no nonconstant factor common to all the : , if satisfies for all , then for some .   "
},
{
  "id": "th_relatively_prime_polys",
  "level": "2",
  "url": "s_gen_eigenspace.html#th_relatively_prime_polys",
  "type": "Theorem",
  "number": "1.25.5",
  "title": "Relatively prime polynomials.",
  "body": " Relatively prime polynomials   Let be a field, and let be a relatively prime list of polynomials. There are polynomials such that .    The proof, though not difficult, lies somewhat outside the scope of this course. This and other results about the theory of polynomials is covered in the ring theory portion of a course in abstract algebra. Moreover, it is an instance of a more general result involving the greatest common divisor of the polynomials .   "
},
{
  "id": "th_factorization_polynomials",
  "level": "2",
  "url": "s_gen_eigenspace.html#th_factorization_polynomials",
  "type": "Theorem",
  "number": "1.25.6",
  "title": "Factorization of polynomials.",
  "body": " Factorization of polynomials   Let be a field, and let be a nonzero polynomial.   Irreducible factorization  We can factor in the form , where the factors are pairwise relatively prime, monic irreducible polynomials.    Uniqueness of factorization  The scalar , set of monic irreducible polynomials and powers are all uniquely determined by .       The proof, though not difficult, lies somewhat outside the scope of this course. This and other results about the theory of polynomials is covered in the ring theory portion of a course in abstract algebra.   "
},
{
  "id": "s_jordan_form",
  "level": "1",
  "url": "s_jordan_form.html",
  "type": "Section",
  "number": "1.26",
  "title": "Jordan form",
  "body": " Jordan form   Jordan block   Let be a field. Given and positive integer , the matrix is called a -Jordan block .     Jordan basis   Let , where is finite dimensional. A Jordan basis of is a basis for which is block diagonal of the form where each is a -Jordan block for some . The matrix is called a Jordan form of in this case.     Cycle of generalized eigenvectors   Let where is finite dimensional, and let be an eigenvalue of . A cycle of generalized eigenvectors of corresponding to is a tuple of the form where and is the smallest positive integer satisfying . The vector is called the initial vector of the cycle; the vector is called the end vector of the cycle.     Jordan blocks   Let where is finite dimensional.   is a Jordan block if and only if is a cycle of generalized eigenvectors.   is a Jordan form if and only if is a concatenation of disjoint cycles of generalized eigenvectors.  A cycle of generalized eigenvectors is linearly independent, and its initial vector is an eigenvector.  If are cycles of generalized eigenvectors corresponding to a fixed whose initial vectors are linearly independent, then the concatenation is linearly independent.           Jordan form   Let where is finite dimensional, and suppose all roots of the characteristic polynomial of lie in .  There is a Jordan basis for .  The corresponding Jordan form is unique up to a permutation of the Jordan blocks .           Jordan form   Let , where is finite dimensional. Assume that the characteristic polynomials of and both split completely over the base field. We say and have the same Jordan form if they have Jordan forms that differ by a permutation of the Jordan blocks.     Dot diagram   Let , where is finite dimensional. Fix an eigenvalue , and let be a Jordan basis of , where each is a cycle of generalized -eigenvectors satisfying for all . The dot diagram of is an staircase pattern of dots constructed in the manner described below. For all , let be the number of dots in the -th row of the dot diagram.   Dots are placed into a rectangular grid containing rows and columns. For all , the -th row contains dots, and these are placed consecutively starting in the leftmost column.    We have for all .   The dot diagram is interpreted as follows.   For any , the total number of dots in the first rows of the diagram is equal to : , . In particular, we have . Thus the number of -Jordan blocks of is equal to the number of dots in the first row of the diagram, which is equal to .    For each , the number of dots in the -th column of the diagram is equal to the length of . Equivalently, is the size of the -th -Jordan block.       We illustrate how to compute a normal form for a matrix transformation in . Since those examples take up quite a lot of space, we place them at the end of the section. In the meantime, we list some interesting theoretical consequences of .   Similarity   Let and suppose both characteristic polynomials factor completely over . The following statements are equivalent.    and are similar (i.e. for some invertible ).     and have the same Jordan form.        Diagonal plus nilpotent   Let , where is finite-dimensional, and assume the characteristic polynomial of splits completely over the base field. There are operators satisfying the following conditions:    ;     is diagonalizable;     is nilpotent ( , for some ).   In other words is the sum of a diagonalizable and a nilpotent operator.         Square-roots of matrices   Let be an invertible matrix whose characteristic polynomial splits completely over . There is a matrix such that . In other words, if is invertible and the characteristic polynomial of splits completely over , then has a square root.        In order to illustrate the subtleties of the Jordan form analysis, we need to work with larger matrices than usual, and this in turn compels us to reach for some computing technology. The wonderful open source computer algebra system Sage serves our needs for this task.   Computing Jordan form   Consider the matrix transformation , where . Compute the characteristic polynomial of .   We see that . This tells us that decomposes into two generalized eigenspaces , and moreover (looking at the multiplicities), that .  Now compute the dot diagram for . Since , we know that , and thus we only need to look at for .   Let be the number of dots in the -th row of our dot diagram for . From the computation above, we see that . The dot diagram for is thus and the Jordan form of breaks into 3 blocks of size , , and . .  Now compute the dot diagram for .   The corresponding dot diagram now consists of a single column and thus the Jordan form for consists of a single Jordan block . In summary, we conclude that there is a Jordan basis of the form , where for some nonzero vectors , and we have . Let us confirm with Sage.      Computing Jordan form   Let , where .   Use the SageCells below to compute a Jordan normal form of in a step-by-step fashion, as in . Confirm your answer using the jordan_form() command.       Having computed the Jordan normal form for , hazard a guess as to what happens to as we let . Verify or falsify your guess in the SageCell below.        Having successfully computed a few Jordan forms for linear operators, we should point out that we have not yet computed an actual Jordan basis . An algorithm for computing Jordan bases can be extracted from the proof of , though it requires significantly more computational work. We content ourselves with illustrating the method with a manageable example, done systematically.   Jordan basis   Let , where . Proceeding as in the examples above, we find that the characteristic polynomial of is , and that a normal form of is . A Jordan basis of will thus consist of three cycles . It is illuminating to arrange this basis as in our dot diagrams: Following the argument in , we will first compute a Jordan basis for , then modify this appropriately to get a Jordan basis of , then repeat the previous step to get a Jordan basis of .  From the diagram above, we see that , and that . Thus any basis of will consist of a single eigenvector, and thus will automatically be a Jordan basis. As we see below, we can choose for the sole element of this basis.   Following the induction argument in the proof of , to create a Jordan basis of , we (a) lengthen the cycle to a cycle , where and , (b) extend to a basis of , producing the two cycles of generalized eigenvectors , which form a basis of . From the computation of above, we see that . Thus we can pick . To extend to a basis of , we first use Sage to compute a basis of this space.   Since , we see that we can add either of the basis elements above to to get a basis. We choose . A Jordan basis of is then obtained by concatenating the two cyles of generalized eigenvectors below . We now repeat this process to transform the Jordan basis of into a Jordan basis of . First we lengthen the two cycles above. Clearly the first cycle can be lengthened by appending . For the second we find satisfying . As we show below, we can choose .   This yields the two cycles . Lastly, we extend to a basis of . This can be done systematically by putting in as the first two columns of a matrix, followed by a complete basis for , and then using the column space algorithm to contract to a basis. The computation below creates this augmented matrix; we see by inspection that we can pick .   Putting it all together, we obtain the following cycles, whose concatenation is a Jordan basis for : Time to put our theory to the test. We should obtain the Jordan form of by the change of basis formula , where    We did it!    "
},
{
  "id": "d_jordan_block",
  "level": "2",
  "url": "s_jordan_form.html#d_jordan_block",
  "type": "Definition",
  "number": "1.26.1",
  "title": "Jordan block.",
  "body": " Jordan block   Let be a field. Given and positive integer , the matrix is called a -Jordan block .   "
},
{
  "id": "d_jordan_basis",
  "level": "2",
  "url": "s_jordan_form.html#d_jordan_basis",
  "type": "Definition",
  "number": "1.26.2",
  "title": "Jordan basis.",
  "body": " Jordan basis   Let , where is finite dimensional. A Jordan basis of is a basis for which is block diagonal of the form where each is a -Jordan block for some . The matrix is called a Jordan form of in this case.   "
},
{
  "id": "d_cycle_gen_eigenvectors",
  "level": "2",
  "url": "s_jordan_form.html#d_cycle_gen_eigenvectors",
  "type": "Definition",
  "number": "1.26.3",
  "title": "Cycle of generalized eigenvectors.",
  "body": " Cycle of generalized eigenvectors   Let where is finite dimensional, and let be an eigenvalue of . A cycle of generalized eigenvectors of corresponding to is a tuple of the form where and is the smallest positive integer satisfying . The vector is called the initial vector of the cycle; the vector is called the end vector of the cycle.   "
},
{
  "id": "th_jordan_cycles",
  "level": "2",
  "url": "s_jordan_form.html#th_jordan_cycles",
  "type": "Theorem",
  "number": "1.26.4",
  "title": "Jordan blocks.",
  "body": " Jordan blocks   Let where is finite dimensional.   is a Jordan block if and only if is a cycle of generalized eigenvectors.   is a Jordan form if and only if is a concatenation of disjoint cycles of generalized eigenvectors.  A cycle of generalized eigenvectors is linearly independent, and its initial vector is an eigenvector.  If are cycles of generalized eigenvectors corresponding to a fixed whose initial vectors are linearly independent, then the concatenation is linearly independent.         "
},
{
  "id": "th_jordan_form",
  "level": "2",
  "url": "s_jordan_form.html#th_jordan_form",
  "type": "Theorem",
  "number": "1.26.5",
  "title": "Jordan form.",
  "body": " Jordan form   Let where is finite dimensional, and suppose all roots of the characteristic polynomial of lie in .  There is a Jordan basis for .  The corresponding Jordan form is unique up to a permutation of the Jordan blocks .         "
},
{
  "id": "d_Jordan_form",
  "level": "2",
  "url": "s_jordan_form.html#d_Jordan_form",
  "type": "Definition",
  "number": "1.26.6",
  "title": "Jordan form.",
  "body": " Jordan form   Let , where is finite dimensional. Assume that the characteristic polynomials of and both split completely over the base field. We say and have the same Jordan form if they have Jordan forms that differ by a permutation of the Jordan blocks.   "
},
{
  "id": "proc_dot_diagram",
  "level": "2",
  "url": "s_jordan_form.html#proc_dot_diagram",
  "type": "Procedure",
  "number": "1.26.7",
  "title": "Dot diagram.",
  "body": " Dot diagram   Let , where is finite dimensional. Fix an eigenvalue , and let be a Jordan basis of , where each is a cycle of generalized -eigenvectors satisfying for all . The dot diagram of is an staircase pattern of dots constructed in the manner described below. For all , let be the number of dots in the -th row of the dot diagram.   Dots are placed into a rectangular grid containing rows and columns. For all , the -th row contains dots, and these are placed consecutively starting in the leftmost column.    We have for all .   The dot diagram is interpreted as follows.   For any , the total number of dots in the first rows of the diagram is equal to : , . In particular, we have . Thus the number of -Jordan blocks of is equal to the number of dots in the first row of the diagram, which is equal to .    For each , the number of dots in the -th column of the diagram is equal to the length of . Equivalently, is the size of the -th -Jordan block.      "
},
{
  "id": "th_similarity",
  "level": "2",
  "url": "s_jordan_form.html#th_similarity",
  "type": "Theorem",
  "number": "1.26.8",
  "title": "Similarity.",
  "body": " Similarity   Let and suppose both characteristic polynomials factor completely over . The following statements are equivalent.    and are similar (i.e. for some invertible ).     and have the same Jordan form.      "
},
{
  "id": "th_diagable_plus_nilpotent",
  "level": "2",
  "url": "s_jordan_form.html#th_diagable_plus_nilpotent",
  "type": "Theorem",
  "number": "1.26.9",
  "title": "Diagonal plus nilpotent.",
  "body": " Diagonal plus nilpotent   Let , where is finite-dimensional, and assume the characteristic polynomial of splits completely over the base field. There are operators satisfying the following conditions:    ;     is diagonalizable;     is nilpotent ( , for some ).   In other words is the sum of a diagonalizable and a nilpotent operator.       "
},
{
  "id": "th_square_roots",
  "level": "2",
  "url": "s_jordan_form.html#th_square_roots",
  "type": "Theorem",
  "number": "1.26.10",
  "title": "Square-roots of matrices.",
  "body": " Square-roots of matrices   Let be an invertible matrix whose characteristic polynomial splits completely over . There is a matrix such that . In other words, if is invertible and the characteristic polynomial of splits completely over , then has a square root.       "
},
{
  "id": "eg_jordan_form_1",
  "level": "2",
  "url": "s_jordan_form.html#eg_jordan_form_1",
  "type": "Example",
  "number": "1.26.11",
  "title": "Computing Jordan form.",
  "body": " Computing Jordan form   Consider the matrix transformation , where . Compute the characteristic polynomial of .   We see that . This tells us that decomposes into two generalized eigenspaces , and moreover (looking at the multiplicities), that .  Now compute the dot diagram for . Since , we know that , and thus we only need to look at for .   Let be the number of dots in the -th row of our dot diagram for . From the computation above, we see that . The dot diagram for is thus and the Jordan form of breaks into 3 blocks of size , , and . .  Now compute the dot diagram for .   The corresponding dot diagram now consists of a single column and thus the Jordan form for consists of a single Jordan block . In summary, we conclude that there is a Jordan basis of the form , where for some nonzero vectors , and we have . Let us confirm with Sage.    "
},
{
  "id": "eg_jordan_form",
  "level": "2",
  "url": "s_jordan_form.html#eg_jordan_form",
  "type": "Example",
  "number": "1.26.12",
  "title": "Computing Jordan form.",
  "body": " Computing Jordan form   Let , where .   Use the SageCells below to compute a Jordan normal form of in a step-by-step fashion, as in . Confirm your answer using the jordan_form() command.       Having computed the Jordan normal form for , hazard a guess as to what happens to as we let . Verify or falsify your guess in the SageCell below.       "
},
{
  "id": "eg_jordan_basis",
  "level": "2",
  "url": "s_jordan_form.html#eg_jordan_basis",
  "type": "Example",
  "number": "1.26.13",
  "title": "Jordan basis.",
  "body": " Jordan basis   Let , where . Proceeding as in the examples above, we find that the characteristic polynomial of is , and that a normal form of is . A Jordan basis of will thus consist of three cycles . It is illuminating to arrange this basis as in our dot diagrams: Following the argument in , we will first compute a Jordan basis for , then modify this appropriately to get a Jordan basis of , then repeat the previous step to get a Jordan basis of .  From the diagram above, we see that , and that . Thus any basis of will consist of a single eigenvector, and thus will automatically be a Jordan basis. As we see below, we can choose for the sole element of this basis.   Following the induction argument in the proof of , to create a Jordan basis of , we (a) lengthen the cycle to a cycle , where and , (b) extend to a basis of , producing the two cycles of generalized eigenvectors , which form a basis of . From the computation of above, we see that . Thus we can pick . To extend to a basis of , we first use Sage to compute a basis of this space.   Since , we see that we can add either of the basis elements above to to get a basis. We choose . A Jordan basis of is then obtained by concatenating the two cyles of generalized eigenvectors below . We now repeat this process to transform the Jordan basis of into a Jordan basis of . First we lengthen the two cycles above. Clearly the first cycle can be lengthened by appending . For the second we find satisfying . As we show below, we can choose .   This yields the two cycles . Lastly, we extend to a basis of . This can be done systematically by putting in as the first two columns of a matrix, followed by a complete basis for , and then using the column space algorithm to contract to a basis. The computation below creates this augmented matrix; we see by inspection that we can pick .   Putting it all together, we obtain the following cycles, whose concatenation is a Jordan basis for : Time to put our theory to the test. We should obtain the Jordan form of by the change of basis formula , where    We did it!   "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "B",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "C",
  "title": "Theory",
  "body": " Theory   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "D",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "appendix-vids",
  "level": "1",
  "url": "appendix-vids.html",
  "type": "Appendix",
  "number": "E",
  "title": "Mantras and fiats",
  "body": " Mantras and fiats   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
