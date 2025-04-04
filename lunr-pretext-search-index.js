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
  "body": " Vector spaces   In the last section we isolated useful number system properties of and generalized them in the form of our axiomatic definition of a field ( ). Similarly, in this section we give a similar treatment to the type of vector spaces usually studied in a first course in linear algebra: that is, the space of real -tuples . The two operations on we choose to generalize are its version of vector addition  , and its version of scalar multiplication  . You should think of the axioms of as an enumeration of precisely which properties of these two operations on we want a structure to enjoy in order to ensure that we can perform a form of vector arithmetic and algebra just as we do in . Note that there is an important qualitative difference between the two vector operations on that is treated carefully in ; namely, whereas vector addition takes as its input two vectors and returns another, scalar multiplication takes a scalar and a vector and returns another vector. In this sense, scalar multiplication should be thought of as a sort of hybrid operation.    Definitions and examples   stands for field   Henceforth, unless stated otherwise, will always denote a field. For any explicit example in this course the field will be either or . However, all statements of theory formulated in terms of are understood to be valid for any field.     Vector space  vector space definition  vector space zero vector  vector space vector inverse  vector space vector   Let be a field. A vector space over (or -vector space ) is a set together with two operations , called respectively vector addition and scalar multiplication , that satisfy the following vector space axioms .   Vector addition is commutative   for all .    Vector addition is associative   for all .    Zero vector  There is an element such that for all , we have . We call the zero vector of .    Vector inverses  For all , there is another element satisfying . We call the vector inverse of .    Distribution over vector addition   for all and .    Distribution over scalar addition   for all and .    Scalar multiplication is associative   for all and all .    Scalar multiplication identity   for all .   We call elements of the vector space  vectors and the elements of  scalars .     Arithmetic and existential axioms  As with the axioms in we divide the vector space axioms into the arithmetic axioms (Axioms (i)-(ii),(v)-(vi),(vii)) and the existential axioms (Axioms (iii)-(iv)).   We now proceed to a litany of examples. Each one will be stated as a definition (for reference purposes), but nonetheless requires a proof that the given structure does indeed constitute a vector space. In a classic mathematical move, we begin with the simplest of all vector spaces, the zero space . Elementary as this example is, it serves well to illustrate the axiomatic nature of .   Zero space   Let be a field, and let , a set containing exactly one element. There is a unique -vector space structure that can be given to , defined as follows.   Vector operations  Vector addition on is defined as ; scalar multiplication on is defined as for all .    Zero vector  The zero vector of is : , .    Vector inverses  The vector inverse of is : , .   Since with respect to this vector space structure, we have . Accordingly, we call a zero space .     makes two claims: that the given operations make into a vector space, and that this is the only way to make into a vector space. As with all claims in mathematics, these need to be proved, but as you will see, the proof is a very light affair.   Proof for  Since only has one item, there is no choice for what vector addition and scalar multiplication can be. They must be defined in the manner given in . Similarly, we must have and , as once again, is the only element of ! This shows that there can be at most one way of giving a vector space structure.  It is now easy to see that these choices do indeed satisfy the vector space axioms. That satisfies the identity of Axiom defining the zero vector follows from the fact that for all we have (since ), and thus . Thus is the zero vector of the space.  Similarly, to show all elements of have vector inverses amounts to showing that has a vector inverse, since this is the only element of . It is claimed that ( , is its own vector inverse), which follows from the fact that . Lastly, the identities of Axioms (i)-(ii) and (v)-(viii) in this setting all reduce to trivial statements of the form . Consider Axiom (vii), for example. For all , we have , in which case and . Thus for all and .  We leave verification of the rest of the axioms to the reader.   It is worth formalizing the proof technique used above into an official procedure for showing whether something is a vector space.   Vector space verification   To decide whether a given set and operations is a vector space, proceed as follows.   Make explicit the underlying set of the proposed vector space.    Make explicit what the scalar multiplication and vector addition operations are.    Identify an element of that serves as the zero vector ( , satisfies ) and for each show that there is a vector satisfying .    Show that the two vector operations and our choice of zero vector and vector inverses satisfy the axioms of .        Vector space verification  Think of steps (1)-(3) of as the issuing of official declarations about the makeup of our proposed vector space: The underlying set shall be as stated ; We declare the vector operations thusly ; The zero vector shall be this element here, and vector inverses shall be assigned in this manner . Step (4) is where we get down to the nitty gritty of showing that the proposed vector space structure articulated in (1)-(3) does indeed satisfy all the necessary properties.  In each of the remaining examples below we carefully lay out the details of items (1)-(3) while often leaving much of the work of item (4) to you. You will meet these vector spaces frequently throughout the rest of your life. Each time you do, it will be helpful for orientation purposes to mentally run through items (1)-(3). Ask yourself: What is the underlying set? What are vector operations? What acts as the zero vector, and how do I assign vector inverses?   We now work our way up in complexity, considering first three examples that might already be familiar to you in some form or other. Note that (a) the vector space operations for each of , , are all very similar in nature (roughly speaking the operations are always defined component-wise ), and (b) that we postpone the verification of the vector space axioms for these examples until after . This is because each of the vector spaces in is in fact one particular example of the vastly more general vector space defined in ! We will make this clear in the proof of .   -tuples   Let be a field. Given a positive integer , recall that is the set of all -valued -tuples: , . Below we define a vector space structure on .   Vector operations  Given and , we define .    Zero vector  The zero vector of is .    Vector inverses  Given a sequence , its vector inverse is .   We call , together with these vector operations, the space of -valued -tuples (or the space of -tuples with coordinates in ).     The proof that is a vector space with respect to these operations is postponed until .    Complex pairs   Consider the complex vector space . Given vectors and scalar , we have .     Space of infinite sequences   Let be a field. Recall that is the set of all -valued infinite sequences: , . Below we define a vector space structure on .   Vector operations  Given and , we define .    Zero vector  The zero vector of with respect to these operations is .    Vector inverses  Given a sequence , its vector inverse is .   We call , together with these vector operations, the space of infinite sequences with entries in (or the space of -valued infinite sequences ).     The proof that is a vector space with respect to these operations is postponed until .    Complex infinite sequences   Consider the complex vector space of all infinite sequences with complex entries. Given sequences and , and scalar , we have .     Space of matrices   Let be a field. Given positive integers , we define to be the set of all matrices with entries in : , . Below we define a vector space structure on .   Vector operations  Given matrices and , we define .    Zero vector  The zero vector of is the the zero matrix .    Vector inverses  Given a matrix its vector inverse is .   We call , together with these vector operations, the space of matrices with entries in (or the space of -valued matrices ).     The proof that is a vector space with respect to these operations is postponed until .    Complex matrices   Consider the vector space of all matrices with complex entries. Given matrices and scalar , we have .    As promised, the vector space defined in generalizes each of the vector spaces defined in , , . The objects of the vector space can be thought of either as functions from the set to the field , or equivalently, as -valued tuples indexed by . Hence the functions\/tuples in its name. Depending on the context, one of these two equivalent conceptions (function or tuple) may be more convenient than the other. For example, to make the connection between , , , and , it is most convenient to think in terms of tuples. See for the general definition of tuples and for an explication of the equivalence between functions and tuples.   Space of -valued functions\/tuples   Let be a field. Given any set , recall that is defined as the set of all functions :  . Equivalently, thinking of functions as tuples, we can describe as the set of all -valued tuples indexed by : , . Below we define a vector space structure on .   Vector operations  Given elements and scalar , we define . In other words, is the function defined as for all , and is the function defined as for all .    Zero vector  The zero vector of is the zero function defined as for all . In other words, using tuple notation, we have .    Vector inverses  Given an element its vector inverse is defined as . In other words is the function on defined as for all .   We call , together with these vector operations, the space of functions from to , or, thinking in terms of tuples, the space of -valued tuples indexed by .     Function\/tuple spaces are vector spaces   Each of the sets , , , , together with the accompanying vector operations defined above, is a vector space.    First we observe, thinking in terms of tuples, that each of the sets , , , along with their accompanying vector space operations, is a specific example of together with its vector operations. This is seen by choosing an appropriate index set in each case. In more detail, we have . Thus it suffices to show that is a vector space with respect to the given vector operations. To do this, we follow . Since has already taken care of steps (1)-(3) for us, it remains to show that the vector space axioms are satisfied. As you will see, the tuple notation for functions makes these proofs quite straightforward consequences of the field axioms satisfied by .  Consider the arithmetic axioms first. We will verify that Axioms (i), (ii), and (v) are satisfied. Given and , we have . Lastly we will show that does indeed satisfy the additive identity axiom (Axiom (iii)), leaving the verification of Axiom (iv) to the reader. Given any element , we have , as desired.     Real-valued functions   Let be an interval in the real line. Using the function interpretation of , is the set of all functions of the form . The vector operations defined in in this setting correspond to the function-arithmetic operations you met in precalculus and calculus: , given functions , their vector sum is the function defined as for all . Similarly, given a scalar and function , the vector scalar multiple is the function defined as for all .  In this context it is possible to visualize our vector operations in terms of the graphs of the functions on the interval .   Visualizing function arithmetic in    Visualizing   Visualizing function addition      Visualizing   Visualizing function scalar multiplication           Vector space properties   Uniqueness of zero vector and inverses   Let be an -vector space.   The zero vector in is unique: , there is one and only one element of that satisfies .    Inverse vectors are unique: , for all there is one and only one vector satisfying .            Vector space properties   Let be an -vector space.   For all , we have .    For all , we have .    For all , we have .    For all and , if , then or .            "
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
  "id": "ss_vector_space_def-4",
  "level": "2",
  "url": "s_vector_space.html#ss_vector_space_def-4",
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
  "id": "ss_vector_space_def-8",
  "level": "2",
  "url": "s_vector_space.html#ss_vector_space_def-8",
  "type": "Proof",
  "number": "1",
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
  "id": "ss_vector_space_def-11",
  "level": "2",
  "url": "s_vector_space.html#ss_vector_space_def-11",
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
  "id": "ss_vector_space_def-14",
  "level": "2",
  "url": "s_vector_space.html#ss_vector_space_def-14",
  "type": "Proof",
  "number": "2",
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
  "id": "ss_vector_space_def-17",
  "level": "2",
  "url": "s_vector_space.html#ss_vector_space_def-17",
  "type": "Proof",
  "number": "3",
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
  "id": "ss_vector_space_def-20",
  "level": "2",
  "url": "s_vector_space.html#ss_vector_space_def-20",
  "type": "Proof",
  "number": "4",
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
  "id": "d_tuple_space",
  "level": "2",
  "url": "s_vector_space.html#d_tuple_space",
  "type": "Definition",
  "number": "1.2.13",
  "title": "Space of <span class=\"process-math\">\\(F\\)<\/span>-valued functions\/tuples.",
  "body": " Space of -valued functions\/tuples   Let be a field. Given any set , recall that is defined as the set of all functions :  . Equivalently, thinking of functions as tuples, we can describe as the set of all -valued tuples indexed by : , . Below we define a vector space structure on .   Vector operations  Given elements and scalar , we define . In other words, is the function defined as for all , and is the function defined as for all .    Zero vector  The zero vector of is the zero function defined as for all . In other words, using tuple notation, we have .    Vector inverses  Given an element its vector inverse is defined as . In other words is the function on defined as for all .   We call , together with these vector operations, the space of functions from to , or, thinking in terms of tuples, the space of -valued tuples indexed by .   "
},
{
  "id": "th_vs_egs",
  "level": "2",
  "url": "s_vector_space.html#th_vs_egs",
  "type": "Theorem",
  "number": "1.2.14",
  "title": "Function\/tuple spaces are vector spaces.",
  "body": " Function\/tuple spaces are vector spaces   Each of the sets , , , , together with the accompanying vector operations defined above, is a vector space.    First we observe, thinking in terms of tuples, that each of the sets , , , along with their accompanying vector space operations, is a specific example of together with its vector operations. This is seen by choosing an appropriate index set in each case. In more detail, we have . Thus it suffices to show that is a vector space with respect to the given vector operations. To do this, we follow . Since has already taken care of steps (1)-(3) for us, it remains to show that the vector space axioms are satisfied. As you will see, the tuple notation for functions makes these proofs quite straightforward consequences of the field axioms satisfied by .  Consider the arithmetic axioms first. We will verify that Axioms (i), (ii), and (v) are satisfied. Given and , we have . Lastly we will show that does indeed satisfy the additive identity axiom (Axiom (iii)), leaving the verification of Axiom (iv) to the reader. Given any element , we have , as desired.   "
},
{
  "id": "eg_real_functions",
  "level": "2",
  "url": "s_vector_space.html#eg_real_functions",
  "type": "Example",
  "number": "1.2.15",
  "title": "Real-valued functions.",
  "body": " Real-valued functions   Let be an interval in the real line. Using the function interpretation of , is the set of all functions of the form . The vector operations defined in in this setting correspond to the function-arithmetic operations you met in precalculus and calculus: , given functions , their vector sum is the function defined as for all . Similarly, given a scalar and function , the vector scalar multiple is the function defined as for all .  In this context it is possible to visualize our vector operations in terms of the graphs of the functions on the interval .   Visualizing function arithmetic in    Visualizing   Visualizing function addition      Visualizing   Visualizing function scalar multiplication        "
},
{
  "id": "th_zero_inv_unique",
  "level": "2",
  "url": "s_vector_space.html#th_zero_inv_unique",
  "type": "Theorem",
  "number": "1.2.17",
  "title": "Uniqueness of zero vector and inverses.",
  "body": " Uniqueness of zero vector and inverses   Let be an -vector space.   The zero vector in is unique: , there is one and only one element of that satisfies .    Inverse vectors are unique: , for all there is one and only one vector satisfying .          "
},
{
  "id": "th_vs_props",
  "level": "2",
  "url": "s_vector_space.html#th_vs_props",
  "type": "Theorem",
  "number": "1.2.18",
  "title": "Vector space properties.",
  "body": " Vector space properties   Let be an -vector space.   For all , we have .    For all , we have .    For all , we have .    For all and , if , then or .          "
},
{
  "id": "s_subspace",
  "level": "1",
  "url": "s_subspace.html",
  "type": "Section",
  "number": "1.3",
  "title": "Subspaces",
  "body": " Subspaces   In this section we will study subspaces , which are special subsets of vector spaces that respect the defining structure of a vector spaces: namely, the two vector operations. makes precise what we mean here by respect .  Subspaces arise naturally in any setting where vector spaces are at play, and are closely connected to solutions to linear systems. As we will see in , subspaces of vector spaces are vector spaces in their own right, furnishing us with yet more interesting examples of vector spaces.    Definition and examples   Subspace   Let be a vector space. A subset is a subspace of if the following conditions hold.   contains the zero vector   .    is closed under addition  For all , if , then . Using logical shorthand: .    is closed under scalar multiplication  For all and , if , then . Using logical shorthand: .         Let and let . Prove that is a subspace.    We must show properties (i)-(iii) hold for .   The zero element of is , which is certainly of the form . Thus .    We must prove the implication . .    We must prove the implication , for any . We have          Let and let . Is a vector space? Decide which of the of properties (i)-(iii) in (if any) are satisfied by .       Clearly .    Suppose . Then , in which case , and hence . Thus is closed under addition.    The set is not closed under scalar multiplication. Indeed, let . Then .       As we now endeavor to show, if is a subspace of a vector space , then it inherits a vector space structure from by simply restricting the vector operations defined on to the subset .   Subspaces are vector spaces   Let be a subspace of the vector space .   The vector operations of restrict to operations on that satisfy the vector space axioms.    The zero vector of , considered as a vector space, is the zero vector of .    Given an element , its vector inverse with respect to the vector space structure of is equal to its vector inverse with respect to the vector space structure of .       It is important to understand how Axioms of come into play here. Without them we would not be able to say that restricting the vector operations of to elements of actually gives rise to well-defined operations on . To be well-defined the operations must output elements that lie not just in , but in itself. This is precisely what being closed under addition and scalar multiplication guarantees. In more detail, since for all (Axiom (ii)), the vector addition on gives rise by restriction to a well-defined operation on ; similarly, since for all and , the scalar multiplication operation on gives rise by restriction to a well-defined scalar multiplication on .  Once we know restriction gives rise to well-defined operations on , verifying the of amounts simply to observing that if a condition is true for all in , it is certainly true for all in the subset .  The existential axioms (iii) and (iv) of , however, require special consideration. By definition, a subspace contains the zero vector of , and clearly this still acts as the zero vector when we restrict the vector operations to . What about vector inverses? We know that for any there is a vector inverse lying somewhere in . We must show that in fact lies in : we need to show that the operation of taking the vector inverse is well-defined on . We prove this as follows: .    Before moving on to more examples of subspaces, we provide a procedure for determining whether something is a subspace. Note that the procedure merges the verification of Axioms (ii)-(iii) of into a single step, using the notion of a linear combination . Now is a good time to make this notion official.   Linear combination   Let be an -vector space, and let be a collection of vectors of . A linear combination of the vectors is a vector expression of the form , where for all . The scalars are called the coefficients of the linear combination. The linear combination is trivial if for all , and nontrivial if for some . A vector is a linear combination of the if we have for some choice of scalars .     Two-step proof for subspaces   We can merge conditions (ii)-(iii) of into a single statement about linear combinations, deriving the following two-step method for proving that a set is a subspace of a vector space .   Show     Show that , for all .        below serves both as an illustration of and a rich source of examples of subspaces. It tells us that the solutions to a matrix equation constitutes a subspace of . This set is called the null space of the matrix. (We will postpone an official definition of null space until we introduce linear transformations.)  The statement and proof of will make use of matrix multiplication and elementary properties that matrix multiplication satisfies. The usual definition of matrix multiplication (for real matrices) generalizes directly to an arbitrary field, and as such we will not include an official definition. Furthermore, all the usual matrix multiplication properties you know and love over the reals carry over to the more general setting of matrices over a general field . We will take this for granted and not include an official statement of those properties.  Lastly, we include another fiat that facilitates dealing with so-called column vectors  .   Tuples shall be column vectors, and vice versa   We hereby declare that all -tuples shall be equated with the corresponding column vector in : , in .     Matrix null space   Let . The set of solutions to the matrix equation is a subspace of .          Important function subspaces   Polynomials   Assume , and let be an infinite subset of . A polynomial function on is a function that can be written in the form , for some nonnegative integer and scalars . Given as in , is called the -th coefficient of ; furthermore, if , we call the leading term of , and we if , and we define the degree of , denoted to be .  Given a nonnegative integer , we define to be the set of all polynomial functions on of degree at most : , . Lastly we define to be the set of all polynomial functions on . Since any polynomial on is of the form for some , we have .     Polynomial spaces   Let , and let be an infinite subset of .    is a subspace of .     is a subspace of for all .           Although not necessary for the proof of , the result below will be useful to us for future discussions. In short, it says that the coefficients of a polynomial uniquely determine it (as long as the domain is infinite).   Polynomial equality   Let and let be an infinite subset of .   Given , we have .    Given and with and , we have .            Function subspaces over   Let be an interval of that contains at least two elements.   We denote by the set of all continuous functions on : i.e., .    Fix . A function is on if is -times differentiable on and its -th derivative is continuous. The set of all functions on is denoted .    A function is on I if is infinitely differentiable on . The set of all functions on is denoted .        Function subspaces.   Let be a an interval containing at least two elements. The sets , , , , are all subspaces of , and we have the following chain of subspaces: .     "
},
{
  "id": "d_subspace",
  "level": "2",
  "url": "s_subspace.html#d_subspace",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Subspace.",
  "body": " Subspace   Let be a vector space. A subset is a subspace of if the following conditions hold.   contains the zero vector   .    is closed under addition  For all , if , then . Using logical shorthand: .    is closed under scalar multiplication  For all and , if , then . Using logical shorthand: .      "
},
{
  "id": "ss_subspace_def-3",
  "level": "2",
  "url": "s_subspace.html#ss_subspace_def-3",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  Let and let . Prove that is a subspace.    We must show properties (i)-(iii) hold for .   The zero element of is , which is certainly of the form . Thus .    We must prove the implication . .    We must prove the implication , for any . We have       "
},
{
  "id": "ss_subspace_def-4",
  "level": "2",
  "url": "s_subspace.html#ss_subspace_def-4",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": "  Let and let . Is a vector space? Decide which of the of properties (i)-(iii) in (if any) are satisfied by .       Clearly .    Suppose . Then , in which case , and hence . Thus is closed under addition.    The set is not closed under scalar multiplication. Indeed, let . Then .      "
},
{
  "id": "th_subspace_vectorspace",
  "level": "2",
  "url": "s_subspace.html#th_subspace_vectorspace",
  "type": "Theorem",
  "number": "1.3.4",
  "title": "Subspaces are vector spaces.",
  "body": " Subspaces are vector spaces   Let be a subspace of the vector space .   The vector operations of restrict to operations on that satisfy the vector space axioms.    The zero vector of , considered as a vector space, is the zero vector of .    Given an element , its vector inverse with respect to the vector space structure of is equal to its vector inverse with respect to the vector space structure of .       It is important to understand how Axioms of come into play here. Without them we would not be able to say that restricting the vector operations of to elements of actually gives rise to well-defined operations on . To be well-defined the operations must output elements that lie not just in , but in itself. This is precisely what being closed under addition and scalar multiplication guarantees. In more detail, since for all (Axiom (ii)), the vector addition on gives rise by restriction to a well-defined operation on ; similarly, since for all and , the scalar multiplication operation on gives rise by restriction to a well-defined scalar multiplication on .  Once we know restriction gives rise to well-defined operations on , verifying the of amounts simply to observing that if a condition is true for all in , it is certainly true for all in the subset .  The existential axioms (iii) and (iv) of , however, require special consideration. By definition, a subspace contains the zero vector of , and clearly this still acts as the zero vector when we restrict the vector operations to . What about vector inverses? We know that for any there is a vector inverse lying somewhere in . We must show that in fact lies in : we need to show that the operation of taking the vector inverse is well-defined on . We prove this as follows: .   "
},
{
  "id": "d_linear_comb",
  "level": "2",
  "url": "s_subspace.html#d_linear_comb",
  "type": "Definition",
  "number": "1.3.5",
  "title": "Linear combination.",
  "body": " Linear combination   Let be an -vector space, and let be a collection of vectors of . A linear combination of the vectors is a vector expression of the form , where for all . The scalars are called the coefficients of the linear combination. The linear combination is trivial if for all , and nontrivial if for some . A vector is a linear combination of the if we have for some choice of scalars .   "
},
{
  "id": "proc_subspace",
  "level": "2",
  "url": "s_subspace.html#proc_subspace",
  "type": "Procedure",
  "number": "1.3.6",
  "title": "Two-step proof for subspaces.",
  "body": " Two-step proof for subspaces   We can merge conditions (ii)-(iii) of into a single statement about linear combinations, deriving the following two-step method for proving that a set is a subspace of a vector space .   Show     Show that , for all .      "
},
{
  "id": "fiat_col_vecs_tuples",
  "level": "2",
  "url": "s_subspace.html#fiat_col_vecs_tuples",
  "type": "Fiat",
  "number": "1.3.7",
  "title": "Tuples shall be column vectors, and vice versa.",
  "body": " Tuples shall be column vectors, and vice versa   We hereby declare that all -tuples shall be equated with the corresponding column vector in : , in .   "
},
{
  "id": "th_matrix_null_space",
  "level": "2",
  "url": "s_subspace.html#th_matrix_null_space",
  "type": "Theorem",
  "number": "1.3.8",
  "title": "Matrix null space.",
  "body": " Matrix null space   Let . The set of solutions to the matrix equation is a subspace of .       "
},
{
  "id": "d_polynomials",
  "level": "2",
  "url": "s_subspace.html#d_polynomials",
  "type": "Definition",
  "number": "1.3.9",
  "title": "Polynomials.",
  "body": " Polynomials   Assume , and let be an infinite subset of . A polynomial function on is a function that can be written in the form , for some nonnegative integer and scalars . Given as in , is called the -th coefficient of ; furthermore, if , we call the leading term of , and we if , and we define the degree of , denoted to be .  Given a nonnegative integer , we define to be the set of all polynomial functions on of degree at most : , . Lastly we define to be the set of all polynomial functions on . Since any polynomial on is of the form for some , we have .   "
},
{
  "id": "th_polynomial_space",
  "level": "2",
  "url": "s_subspace.html#th_polynomial_space",
  "type": "Theorem",
  "number": "1.3.10",
  "title": "Polynomial spaces.",
  "body": " Polynomial spaces   Let , and let be an infinite subset of .    is a subspace of .     is a subspace of for all .          "
},
{
  "id": "th_poly_equality",
  "level": "2",
  "url": "s_subspace.html#th_poly_equality",
  "type": "Theorem",
  "number": "1.3.11",
  "title": "Polynomial equality.",
  "body": " Polynomial equality   Let and let be an infinite subset of .   Given , we have .    Given and with and , we have .          "
},
{
  "id": "d_function_subspaces",
  "level": "2",
  "url": "s_subspace.html#d_function_subspaces",
  "type": "Definition",
  "number": "1.3.12",
  "title": "Function subspaces over <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Function subspaces over   Let be an interval of that contains at least two elements.   We denote by the set of all continuous functions on : i.e., .    Fix . A function is on if is -times differentiable on and its -th derivative is continuous. The set of all functions on is denoted .    A function is on I if is infinitely differentiable on . The set of all functions on is denoted .      "
},
{
  "id": "th_function_spaces",
  "level": "2",
  "url": "s_subspace.html#th_function_spaces",
  "type": "Theorem",
  "number": "1.3.13",
  "title": "Function subspaces..",
  "body": " Function subspaces.   Let be a an interval containing at least two elements. The sets , , , , are all subspaces of , and we have the following chain of subspaces: .   "
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
