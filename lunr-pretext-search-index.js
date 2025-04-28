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
  "body": " Linear transformations   As detailed in a linear transformation is a special type of function between two vector spaces: one that respects in some sense the vector operations of both spaces.  This manner of theorizing is typical in mathematics: first we introduce a special class of objects defined axiomatically, then we introduce special functions or maps between these objects. Since the original objects of study (e.g. vector spaces) come equipped with special structural properties (e.g. vector operations), the functions we wish to study are the ones that somehow acknowledge this structure.  You have already seen this principle at work in your study of calculus. First we give some structure by defining a notion of proximity (i.e., is close to if is small), then we introduce a special family of functions that somehow respects this structure: these are precisely the continuous functions!  As you will see, linear transformations are not just interesting objects of study in their own right, they also serve as invaluable tools in our continued exploration of the intrinsic properties of vector spaces.  In the meantime rejoice in the fact that we can now give a succinct definition of linear algebra: it is the theory of vector spaces and the linear transformations between them. Go shout it from the rooftops!    Definition and examples   Linear transformation   Let and be -vector spaces. A linear transformation from to is a function satisfying the following properties.    for all .     for all and .   We let denote the set of all linear transformations from to : , .     Linear transformations  So what exactly do we mean when we say that a linear transformation respects the vector space structures? In plain English, the two axioms defining a linear transformation read as follows: the image of a sum is the sum of the images, and the image of a scalar multiple is the scalar multiple of the image. Alternatively, we could say that the application of a linear transformation to input vectors distributes over vector addition and scalar multiplication.   Before getting to examples of linear transformations, it will perhaps be enlightening to consider how a function between two vector spaces could fail to be a linear transformation. is an attempt at visualizing what it means for a function could fail one of the two linear transformation axioms. We will often fall back on these types of conceptual visualizations as a means of organizing our thinking about linear transformations.    Visualizing the failure of linear transformation axioms     fails Axiom : .         fails Axiom : .   T fails axiom ii         A nonlinear example   Let be defined as .   Does satisfy Axiom ? If so, prove it. Otherwise, give an explicit counterexample.    Does satisfy Axiom ? If so, prove it. Otherwise, give an explicit counterexample.           does not satisfy Axiom . Let and . We have . We thus see that .     does not satisfy Axiom . Let and . We have . We thus see that .        Notational quirk   brings to light a notational quirk when dealing with functions of the form . Technically speaking, given an input we should write . And yet our inner aesthete cries out at the unnecessary nested parentheses, and pleads that the notational laws be relaxed in this specific setting. We shall make it so.    Parentheses shall be dropped   In the special case where the domain of function is a subset of , then given input we may write for .    We now turn to functions that do satisfy the linear transformation axioms. As our first examples of linear transformations, we define zero transformations and identity transformations .   Zero, identity, and scaling transformations   Let and be vector spaces.   Zero transformation  The zero transformation from to , denoted , is defined as follows: . In other words, is the function that maps all elements of to the zero vector of .    Identity transformation  The identity transformation of , denoted , is defined as follows: . In other words, for all . When the underlying vector space is clear from the context, we will drop the subscript and write for .    Dilation (or scaling transformation)  Let be a fixed scalar. The function is called a dilation (or scaling transformation ) with scaling factor  .  Observe that since for all , we have .        Zero, identity, and scaling transformations   Let and be vector spaces.   The zero transformation is a linear transformation.    For all scalars the dilation is a linear transformation. In particular, is a linear transformation.          Let be the zero function. We verify each defining property separately.   Given , we have .    Given and , we have .   This proves that is a linear transformation.    Fix a scalar and let be the scaling transformation defined as for all .   Given , we have .    Given and , we have .   This proves that is a linear transformation.        Basic properties of linear transformations   Let be a linear transformation.   We have . In other words, maps the zero vector of to the zero vector of .    For all , we have .    Let be a tuple of vectors of . Given any linear combination of the , we have .          We employ some similar trickery to what was done in the proof of . Assuming is linear: . Thus, whatever may be, it satisfies . Canceling on both sides using , we conclude .    The argument is similar: . Since , adding to both sides of the equation yields .    Recall that by definition that there is a subset such that for all , in which case we have we can write . An easy induction argument on , using the two defining properties of a linear transformation, shows that . Since for all , we have , as desired.        Transformations distribute over combinations   Statement of combines and extends our distributive interpretations of . It says that the application of a linear transformation distributes over arbitrary linear combinations of vectors.     Interesting examples  As a sort of converse to statement of , observe that if satisfies for all and , then is linear. Indeed, taking the special case yields Axiom of ; and choosing yields Axiom of . As a consequence, we have the following one-step procedure for proving whether a function between vector spaces is a linear transformation.   One-step technique for transformations   Let be a function between vector spaces. To prove is a linear transformation, show that for all scalars and all vectors .    Next we introduce an extremely important family of linear transformations: any matrix has associated to it a linear transformation called a matrix transformation .   Matrix transformations    the matrix transformation associated to     Let . The matrix transformation associated to is the function defined as for all . We call the standard matrix of .     Matrix transformation  Observe how comes into play in the definition of : given a tuple , in order to make sense of the expression , we must think of as the column vector .    Matrix transformation   Let . Prove that is a linear transformation.    We use the 1-step technique. As you will see the proof follows directly from elementary properties of matrix multiplication. Given any and , we have .     Differentiation   Let be an interval of . Prove that is a linear transformation.         Integration   Let be a closed interval of . Prove that the function is a linear transformation.         Function evaluation   Let be a nonempty set, and let a list of elements of . Prove that the function is a linear transformation.         Shift transformations   Prove that the functions and defined as are linear transformations.          Transformations and bases   Transformations and bases   Let and be vector spaces, and let be a basis of .   Give linear transformations , we have if and only if for all .    Given any tuple of vectors of , there is a linear transformation satisfying for all . Furthermore, as a consequence of (1), this linear transformation is unique.       We assume is a basis of .   Assume and that for all . Since is a basis, given any we can write as a linear combination for some , in which case we have . We have shown that for all . By definition, this means that .    Given a tuple of vectors of , the following recipe defines a function :   given , write as a linear combination of the vectors ;    define .   We need to address two details of this recipe in order to convince ourselves that this determines a well-defined function . Firstly, since is a basis, the coefficients in the linear combination are uniquely determined by , making the value uniquely determined. Secondly, observe that since for all but finitely many , the expression is a (finite) linear combination of vectors, and thus defines an element of .  From our definition of it follows that for all . Indeed, to compute following our recipe, we write as a linear combination of the elements of , whence it follows that .  Lastly, we must show that is linear using the 1-step technique. Given and scalars , write as linear combinations of the , and then compute .        Transformations and bases  The two statements of deserve some elaboration and interpretation.   The first statement tells us that a linear transformation is uniqueley determined by its values for any basis . In other words, if you know that is linear, and you know where it sends each element of a basis, then you know completeley! Put another way, a linear transformation is uniquely determined by its action on any given basis.    Consisder the second statement as a powerful transformation building result. In more detail, it says the following: given a basis of , given any choice of values , there is a unique linear transformation that sends to for all .       Matrix transformations   Let be a linear transformation. There is a unique matrix such that . In particular, all linear transformations from to are matrix transformations.    The proof is left as an exercise.      as a vector space  We end this section by providing a vector space structure to the set of all linear transformations from to . As in , we state the result as a definition with proof.   Space of linear transformations   Let and be vector spaces. Below we define a vector space structure on .   Vector operations  Given linear transformations and scalar , we define linear transformations as follows: .    Zero vector  The zero vector of is the zero transformation defined as for all .    Vector inverses  Given a linear transformation , its vector inverse is the linear transformation defined as for all .   We call , together with these vector operations, the space of linear transformations from to .     The proof is left as an exercises. Note that before verifying the vector space axioms (i)-(viii) you must first verify that the given operations are well-defined: , you must show that if and are linear transformations from to , then so are the functions and .    "
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
  "id": "eg_diff_linear",
  "level": "2",
  "url": "s_transformation.html#eg_diff_linear",
  "type": "Example",
  "number": "1.9.15",
  "title": "Differentiation.",
  "body": " Differentiation   Let be an interval of . Prove that is a linear transformation.       "
},
{
  "id": "eg_integration_trans",
  "level": "2",
  "url": "s_transformation.html#eg_integration_trans",
  "type": "Example",
  "number": "1.9.16",
  "title": "Integration.",
  "body": " Integration   Let be a closed interval of . Prove that the function is a linear transformation.       "
},
{
  "id": "eg_evaluation_trans",
  "level": "2",
  "url": "s_transformation.html#eg_evaluation_trans",
  "type": "Example",
  "number": "1.9.17",
  "title": "Function evaluation.",
  "body": " Function evaluation   Let be a nonempty set, and let a list of elements of . Prove that the function is a linear transformation.       "
},
{
  "id": "eg_shift_transform",
  "level": "2",
  "url": "s_transformation.html#eg_shift_transform",
  "type": "Example",
  "number": "1.9.18",
  "title": "Shift transformations.",
  "body": " Shift transformations   Prove that the functions and defined as are linear transformations.       "
},
{
  "id": "th_trans_basis",
  "level": "2",
  "url": "s_transformation.html#th_trans_basis",
  "type": "Theorem",
  "number": "1.9.19",
  "title": "Transformations and bases.",
  "body": " Transformations and bases   Let and be vector spaces, and let be a basis of .   Give linear transformations , we have if and only if for all .    Given any tuple of vectors of , there is a linear transformation satisfying for all . Furthermore, as a consequence of (1), this linear transformation is unique.       We assume is a basis of .   Assume and that for all . Since is a basis, given any we can write as a linear combination for some , in which case we have . We have shown that for all . By definition, this means that .    Given a tuple of vectors of , the following recipe defines a function :   given , write as a linear combination of the vectors ;    define .   We need to address two details of this recipe in order to convince ourselves that this determines a well-defined function . Firstly, since is a basis, the coefficients in the linear combination are uniquely determined by , making the value uniquely determined. Secondly, observe that since for all but finitely many , the expression is a (finite) linear combination of vectors, and thus defines an element of .  From our definition of it follows that for all . Indeed, to compute following our recipe, we write as a linear combination of the elements of , whence it follows that .  Lastly, we must show that is linear using the 1-step technique. Given and scalars , write as linear combinations of the , and then compute .      "
},
{
  "id": "ss_transformations_bases-3",
  "level": "2",
  "url": "s_transformation.html#ss_transformations_bases-3",
  "type": "Remark",
  "number": "1.9.20",
  "title": "Transformations and bases.",
  "body": " Transformations and bases  The two statements of deserve some elaboration and interpretation.   The first statement tells us that a linear transformation is uniqueley determined by its values for any basis . In other words, if you know that is linear, and you know where it sends each element of a basis, then you know completeley! Put another way, a linear transformation is uniquely determined by its action on any given basis.    Consisder the second statement as a powerful transformation building result. In more detail, it says the following: given a basis of , given any choice of values , there is a unique linear transformation that sends to for all .     "
},
{
  "id": "cor_matrix_transformation",
  "level": "2",
  "url": "s_transformation.html#cor_matrix_transformation",
  "type": "Corollary",
  "number": "1.9.21",
  "title": "Matrix transformations.",
  "body": " Matrix transformations   Let be a linear transformation. There is a unique matrix such that . In particular, all linear transformations from to are matrix transformations.    The proof is left as an exercise.   "
},
{
  "id": "d_linear_transformations",
  "level": "2",
  "url": "s_transformation.html#d_linear_transformations",
  "type": "Definition",
  "number": "1.9.22",
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
  "body": " Isomorphisms   Composition of linear transformations  Given linear transformations and , we will denote their composition as .    Composition of linear transformations   Let , , and .   The composition is a linear transformation.          and .     and .            Isomorphism   A linear map is an isomorphism if there is a linear transformation satisfying and . When this is the case we call the inverse of , and write . Two vector spaces and are isomorphic if there is an isomorphism .     Inverse functions  Using the language of inverse functions, we see that a linear transformation is an isomorphism if (a) it is invertible, and (b) its inverse is itself a linear transformation. As we will see in the next theorem, this second condition is automatic.    Isomorphisms   Let . The following statements are equivalent.    is an isomorphism.     is invertible.     is bijective.            Isomorphisms   Assume is a linear transformation. Below you find three separate approaches for deciding whether is an isomorphism. Depending on the context, one approach may be more convenient than the others.   Invertibility  Provide an inverse function , or prove that no such inverse function exists. By , an inverse function is automatically linear.    Bijection  Determine whether is bijective. This can be accomplished by computing and .     If , then the following statements are equivalent.    is an isomorphism.     is injective (equivalently, ).     is surjective (equivalently, ).           Matrix transformations   Prove that a matrix transformation is an isomorphism if and only if is invertible.         Transposition   Define as . Prove that is an isomorphism.         Evaluation   Let be an infinite subset of the field , let be a positive integer, and let be a choice of distinct scalars ( , for ). Prove that the evaluation map is an isomorphism.         Isomorphisms preserve structure   Let be an isomorphism.   A tuple of vectors in is linearly independent if and only if its image is linearly independent.    Let , where is a tuple in . We have .     is a basis of if and only if is a basis of .     is finite-dimensional if and only if is finite-dimensional, and in this case we have .     is a subspace of if and only if is a subspace of .    We have for subspaces if and only if .            Finite-dimensional spaces   Let and be finite dimensional vector spaces. The following statements are equivalent.    is isomorphic to .     .       "
},
{
  "id": "s_isom-2",
  "level": "2",
  "url": "s_isom.html#s_isom-2",
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
  "body": " Composition of linear transformations   Let , , and .   The composition is a linear transformation.          and .     and .          "
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
  "id": "s_isom-5",
  "level": "2",
  "url": "s_isom.html#s_isom-5",
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
  "body": " Isomorphisms   Let . The following statements are equivalent.    is an isomorphism.     is invertible.     is bijective.          "
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
  "id": "eg_isom_matrix",
  "level": "2",
  "url": "s_isom.html#eg_isom_matrix",
  "type": "Example",
  "number": "1.12.7",
  "title": "Matrix transformations.",
  "body": " Matrix transformations   Prove that a matrix transformation is an isomorphism if and only if is invertible.       "
},
{
  "id": "eg_isom_transposition",
  "level": "2",
  "url": "s_isom.html#eg_isom_transposition",
  "type": "Example",
  "number": "1.12.8",
  "title": "Transposition.",
  "body": " Transposition   Define as . Prove that is an isomorphism.       "
},
{
  "id": "eg_isom_evaluation",
  "level": "2",
  "url": "s_isom.html#eg_isom_evaluation",
  "type": "Example",
  "number": "1.12.9",
  "title": "Evaluation.",
  "body": " Evaluation   Let be an infinite subset of the field , let be a positive integer, and let be a choice of distinct scalars ( , for ). Prove that the evaluation map is an isomorphism.       "
},
{
  "id": "th_isom_structure",
  "level": "2",
  "url": "s_isom.html#th_isom_structure",
  "type": "Theorem",
  "number": "1.12.10",
  "title": "Isomorphisms preserve structure.",
  "body": " Isomorphisms preserve structure   Let be an isomorphism.   A tuple of vectors in is linearly independent if and only if its image is linearly independent.    Let , where is a tuple in . We have .     is a basis of if and only if is a basis of .     is finite-dimensional if and only if is finite-dimensional, and in this case we have .     is a subspace of if and only if is a subspace of .    We have for subspaces if and only if .          "
},
{
  "id": "cor_isom_finite_dim",
  "level": "2",
  "url": "s_isom.html#cor_isom_finite_dim",
  "type": "Corollary",
  "number": "1.12.11",
  "title": "Finite-dimensional spaces.",
  "body": " Finite-dimensional spaces   Let and be finite dimensional vector spaces. The following statements are equivalent.    is isomorphic to .     .      "
},
{
  "id": "s_matrix_reps",
  "level": "1",
  "url": "s_matrix_reps.html",
  "type": "Section",
  "number": "1.13",
  "title": "Coordinate vectors and matrix representations",
  "body": " Coordinate vectors and matrix representations   Given a basis of a vector space , we know from that any can be expressed in a unique way as , where for all but finitely many . The notion of a coordinate vector turn this observation into a computational tool by exploiting the resulting correspondence . We will use the correspondence in two distinct ways, as described below.   Given an -dimensional vector space and basis , the correspondence is an isomorphism that allows us to treat elements of the abstract space as if they were elements of , and to then make use of our wealth of computational procedures related to -tuples.    The correspondence is also useful when working in itself. Namely, there will be situations where it is convenient to represent vectors with a particular nonstandard basis , as opposed to the standard basis . In this setting the correspondence will be used as a change of coordinates technique.       Coordinate vectors   Coordinate vectors   Let be a basis of the vector space . Given , let be the unique choice of scalars such that can be expressed as the linear combination . We define the tuple to be the coordinate vector of with respect to , denoted : , . We call the function the coordinate vector map with respect to .     Coordinate vectors   Let be a basis of the vector space , and let be the coordinate vector map with respect to .    is an injective transformation from to .     is an isomorphism from to if and only if is finite.            Computing coordinate vectors   Let be a basis of the vector space . Given , compute the coordinate vector by following these steps.   Set up the vector equation in the unknowns .    Solve for the unknowns in some manner. A surefire technique is to reduce the vector equation to a linear system and use Gaussian elimination. However, there are some situations when you can simply produce the scalars by inspection.    Conclude that .       As illustrated by the next example, one setting for which we can compute by inspection (see (2) of ) is when is one of our standard ordered bases.   Standard bases   Computing coordinate vectors relative to one of our standard ordered bases for , , or amounts to just listing the coefficients or entries used to specify the given vector. The examples below serve to illustrate the general method in this setting.   Consider the standard basis of . For any we have , since .    Consider the standard basis of . For any we have since .    Let be the standard basis of , where is an infinite subset of the field . Given any polynomial , we have , since .        Reorderings of standard bases   If we choose an alternate ordering of one of the standard ordered bases, the entries of the coordinate vector are reordered accordingly, as illustrated by the examples below.   Consider the reordered basis of . Given we have , since .    Consider the reordered basis of . Given , we have , since .        Nonstandard bases   For a nonstandard ordered basis, we usually compute coordinate vectors by solving a relevant system of linear equations, as the examples below illustrate.   Let , , and . Compute . More generally, compute for an arbitrary .    Let , , and . Compute . More generally, compute for an arbitrary element .          Using , we compute by finding the unique pair satisfying . By inspection, we see that . We conclude that . More generally, to compute for an arbitrary , we must find the pair satisfying , or equivalently . The usual Gaussian elimination technique yields the unique solution , and thus for .    To compute we must find the unique triple satisfying . The equivalent linear system once we combine like terms and equate coefficients ( ) is . The unique solution to this system is . We conclude . The same reasoning shows that more generally, given , we have .        Contracting and extending to bases in general spaces   Let be a vector space of dimension , and let be a tuple of vectors of .   Contracting to a basis  Let . To contract to a basis , proceed as follows.   Pick any ordered basis of and let .    Use a the column space algorithm to contract to a basis of .    The tuple is a basis for .       Extending to a basis  Assume is linearly independent. To extend to a basis of proceed as follows.   Pick any ordered basis of and let , the corresponding tuple in .    Use an appropriate fundamental space algorithm to extend to a basis of .    For all find vectors satisfying . The tuple is a basis of .            The set is a subset of the space . Let . Contract to a basis of and determine whether .    Let be the standard basis of . Apply to the elements of the given to get a corresponding set : . Apply the column space procedure to contract to a basis of . This produces the subset Translating back to , we conclude that the corresponding set is a basis for . We conclude that .  Lastly the space of all trace-zero matrices is easily seen to have basis , and hence . Since , we conclude that .      Matrix representations  Of course, we are not just interested in studying vector spaces and their elements, but also linear transformations between vector spaces. Once again, by choosing bases for and we are able to get a computational grip on the transformation . When both and are finite dimensional, this takes the form of a matrix representation of .   Matrix representations of linear transformations   Let and be vector spaces with ordered bases and , respectively. Given a linear transformation , the matrix representing with respect to and , is the matrix whose -th column is , considered as a column vector: , . In the special case where and we pick we write simply .     Matrix representation   The function is linear. Compute , where and are the standard bases for and , respectively.    We have and . By definition, we have . We first compute for each : . To finish our computation, we must compute for each . Since is the standard basis of , this is not difficult: in general we have . Thus and .     Standard matrix   Let be a linear transformation. Recall that there is a unique matrix , the standard matrix of , such that . Prove that , where and are the standard bases of and , respectively. In other words, the standard matrix of is precisely the matrix representation of with respect to the standard bases.         Different choice of bases   Define as .    Compute , where is the standard basis of .    Compute , where .        According to , since is the standard basis is the matrix such that : .    We have , where the last equality uses the fact that and , as you can verify yourself.    So we have and . Moral: different choices of bases yield different matrix representations.     Defining property of matrix representation   Let be a linear transformation, where and , and let be ordered bases for and , respectively.   For all we have . As usual is treated here as an column vector.    Property defines : , if is an matrix satisfying for all , then .       Let .    By definition we have . Given any , we can write for some . Then , as desired.    Assume satisfies for all . Then in particular we have for all . Since is the -th element of , we have , the -th standard basis element of . Using the column method ( ), we see that where is the -th column of . Thus implies that the -th column of is equal to , the -th column of , for all . Since and have identical columns, we conclude that , as desired.       Uniqueness of   The uniqueness property described in (2) of provides an alternative way of computing that can be useful in certain situations: namely, simply provide an matrix that satisfies the defining property for all . Since there is only one such matrix, we must have in this case.    Let , , and be as in . The defining property of can be summarized by saying that the following diagram is commutative .   Commutative diagram for  Commutative diagram for       The diagram being commutative here means that starting with an element in the top left of the diagram, whether we travel to the bottom right of the diagram either by first applying and then applying ( go right, then down ), or else by first applying and then applying ( go down, then right ), we get the same result! (The bottom map should technically be labeled , where , but this would detract from the elegance of the diagram.)  Besides commutativity, the other import feature of is that the two vertical coordinate transformations identify the domain and codomain of with the familiar spaces and isomorphically. These properties together allow us to translate any linear algebraic question about to an equivalent question about the matrix , as the following theorem indicates.   Matrix representations of composition   Let and , and let be bases for , , and , respectively. We have      Matrix representation isomorphism   Let and be bases of the vector spaces and , respectively, where and .   The map   is an isomorphism.    We have             "
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
  "body": " Coordinate vectors   Let be a basis of the vector space , and let be the coordinate vector map with respect to .    is an injective transformation from to .     is an isomorphism from to if and only if is finite.          "
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
  "id": "ss_coordinate_vectors-7",
  "level": "2",
  "url": "s_matrix_reps.html#ss_coordinate_vectors-7",
  "type": "Example",
  "number": "1.13.5",
  "title": "Reorderings of standard bases.",
  "body": " Reorderings of standard bases   If we choose an alternate ordering of one of the standard ordered bases, the entries of the coordinate vector are reordered accordingly, as illustrated by the examples below.   Consider the reordered basis of . Given we have , since .    Consider the reordered basis of . Given , we have , since .      "
},
{
  "id": "ss_coordinate_vectors-8",
  "level": "2",
  "url": "s_matrix_reps.html#ss_coordinate_vectors-8",
  "type": "Example",
  "number": "1.13.6",
  "title": "Nonstandard bases.",
  "body": " Nonstandard bases   For a nonstandard ordered basis, we usually compute coordinate vectors by solving a relevant system of linear equations, as the examples below illustrate.   Let , , and . Compute . More generally, compute for an arbitrary .    Let , , and . Compute . More generally, compute for an arbitrary element .          Using , we compute by finding the unique pair satisfying . By inspection, we see that . We conclude that . More generally, to compute for an arbitrary , we must find the pair satisfying , or equivalently . The usual Gaussian elimination technique yields the unique solution , and thus for .    To compute we must find the unique triple satisfying . The equivalent linear system once we combine like terms and equate coefficients ( ) is . The unique solution to this system is . We conclude . The same reasoning shows that more generally, given , we have .      "
},
{
  "id": "proc_contract_extend_general",
  "level": "2",
  "url": "s_matrix_reps.html#proc_contract_extend_general",
  "type": "Procedure",
  "number": "1.13.7",
  "title": "Contracting and extending to bases in general spaces.",
  "body": " Contracting and extending to bases in general spaces   Let be a vector space of dimension , and let be a tuple of vectors of .   Contracting to a basis  Let . To contract to a basis , proceed as follows.   Pick any ordered basis of and let .    Use a the column space algorithm to contract to a basis of .    The tuple is a basis for .       Extending to a basis  Assume is linearly independent. To extend to a basis of proceed as follows.   Pick any ordered basis of and let , the corresponding tuple in .    Use an appropriate fundamental space algorithm to extend to a basis of .    For all find vectors satisfying . The tuple is a basis of .         "
},
{
  "id": "ss_coordinate_vectors-10",
  "level": "2",
  "url": "s_matrix_reps.html#ss_coordinate_vectors-10",
  "type": "Example",
  "number": "1.13.8",
  "title": "",
  "body": "  The set is a subset of the space . Let . Contract to a basis of and determine whether .    Let be the standard basis of . Apply to the elements of the given to get a corresponding set : . Apply the column space procedure to contract to a basis of . This produces the subset Translating back to , we conclude that the corresponding set is a basis for . We conclude that .  Lastly the space of all trace-zero matrices is easily seen to have basis , and hence . Since , we conclude that .   "
},
{
  "id": "d_matrix_representation",
  "level": "2",
  "url": "s_matrix_reps.html#d_matrix_representation",
  "type": "Definition",
  "number": "1.13.9",
  "title": "Matrix representations of linear transformations.",
  "body": " Matrix representations of linear transformations   Let and be vector spaces with ordered bases and , respectively. Given a linear transformation , the matrix representing with respect to and , is the matrix whose -th column is , considered as a column vector: , . In the special case where and we pick we write simply .   "
},
{
  "id": "eg_matrixreps_std_basis",
  "level": "2",
  "url": "s_matrix_reps.html#eg_matrixreps_std_basis",
  "type": "Example",
  "number": "1.13.10",
  "title": "Matrix representation.",
  "body": " Matrix representation   The function is linear. Compute , where and are the standard bases for and , respectively.    We have and . By definition, we have . We first compute for each : . To finish our computation, we must compute for each . Since is the standard basis of , this is not difficult: in general we have . Thus and .   "
},
{
  "id": "eg_std_matrix",
  "level": "2",
  "url": "s_matrix_reps.html#eg_std_matrix",
  "type": "Example",
  "number": "1.13.11",
  "title": "Standard matrix.",
  "body": " Standard matrix   Let be a linear transformation. Recall that there is a unique matrix , the standard matrix of , such that . Prove that , where and are the standard bases of and , respectively. In other words, the standard matrix of is precisely the matrix representation of with respect to the standard bases.       "
},
{
  "id": "eg_matrixreps_different_bases",
  "level": "2",
  "url": "s_matrix_reps.html#eg_matrixreps_different_bases",
  "type": "Example",
  "number": "1.13.12",
  "title": "Different choice of bases.",
  "body": " Different choice of bases   Define as .    Compute , where is the standard basis of .    Compute , where .        According to , since is the standard basis is the matrix such that : .    We have , where the last equality uses the fact that and , as you can verify yourself.    So we have and . Moral: different choices of bases yield different matrix representations.   "
},
{
  "id": "th_matrixrep",
  "level": "2",
  "url": "s_matrix_reps.html#th_matrixrep",
  "type": "Theorem",
  "number": "1.13.13",
  "title": "Defining property of matrix representation.",
  "body": " Defining property of matrix representation   Let be a linear transformation, where and , and let be ordered bases for and , respectively.   For all we have . As usual is treated here as an column vector.    Property defines : , if is an matrix satisfying for all , then .       Let .    By definition we have . Given any , we can write for some . Then , as desired.    Assume satisfies for all . Then in particular we have for all . Since is the -th element of , we have , the -th standard basis element of . Using the column method ( ), we see that where is the -th column of . Thus implies that the -th column of is equal to , the -th column of , for all . Since and have identical columns, we conclude that , as desired.     "
},
{
  "id": "rm_matrixreps_uniqueness",
  "level": "2",
  "url": "s_matrix_reps.html#rm_matrixreps_uniqueness",
  "type": "Remark",
  "number": "1.13.14",
  "title": "Uniqueness of <span class=\"process-math\">\\([T]_B^{B'}\\)<\/span>.",
  "body": " Uniqueness of   The uniqueness property described in (2) of provides an alternative way of computing that can be useful in certain situations: namely, simply provide an matrix that satisfies the defining property for all . Since there is only one such matrix, we must have in this case.   "
},
{
  "id": "fig_comm_diag",
  "level": "2",
  "url": "s_matrix_reps.html#fig_comm_diag",
  "type": "Figure",
  "number": "1.13.15",
  "title": "Commutative diagram for <span class=\"process-math\">\\([T]_B^{B'}\\)<\/span>",
  "body": " Commutative diagram for  Commutative diagram for     "
},
{
  "id": "cor_matrix_reps_comp",
  "level": "2",
  "url": "s_matrix_reps.html#cor_matrix_reps_comp",
  "type": "Corollary",
  "number": "1.13.16",
  "title": "Matrix representations of composition.",
  "body": " Matrix representations of composition   Let and , and let be bases for , , and , respectively. We have    "
},
{
  "id": "th_matrix_reps_isom",
  "level": "2",
  "url": "s_matrix_reps.html#th_matrix_reps_isom",
  "type": "Theorem",
  "number": "1.13.17",
  "title": "Matrix representation isomorphism.",
  "body": " Matrix representation isomorphism   Let and be bases of the vector spaces and , respectively, where and .   The map   is an isomorphism.    We have           "
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
