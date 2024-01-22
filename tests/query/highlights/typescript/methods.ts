class Class {
    method() {}
//  ^ method
    public_field_method = () => {};
//  ^ method
    #private_property_method = () => {};
//  ^ method
    declare declared_arrow_field: () => void;
//          ^ method
    anonymous_function_field = function() {};
//  ^ method
    annotated_method: () => void = getFunctionSomeOtherWay();
//  ^ method
}
